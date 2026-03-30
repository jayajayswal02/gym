import React, { useState, useEffect } from 'react'
import { supabase } from '../config/supabase'
import './ContactAdmin.css'

function ContactAdmin() {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all')
  const [selectedContact, setSelectedContact] = useState(null)
  const [totalCount, setTotalCount] = useState(0)

  // Fetch contacts from Supabase
  useEffect(() => {
    fetchContacts()
  }, [filter])

  const fetchContacts = async () => {
    setLoading(true)
    setError(null)

    try {
      let query = supabase.from('contacts').select('*')

      // Apply filter
      if (filter !== 'all') {
        query = query.eq('status', filter)
      }

      const { data, error: fetchError, count } = await query
        .order('created_at', { ascending: false })

      if (fetchError) throw fetchError

      setContacts(data || [])
      setTotalCount(count || 0)
    } catch (err) {
      console.error('❌ Error fetching contacts:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // Update contact status
  const updateStatus = async (id, newStatus) => {
    try {
      const { error: updateError } = await supabase
        .from('contacts')
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', id)

      if (updateError) throw updateError

      // Update local state
      setContacts(contacts.map(c =>
        c.id === id ? { ...c, status: newStatus } : c
      ))

      if (selectedContact?.id === id) {
        setSelectedContact({ ...selectedContact, status: newStatus })
      }

      console.log(`✅ Contact #${id} updated to ${newStatus}`)
    } catch (err) {
      console.error('❌ Error updating contact:', err)
    }
  }

  // Delete contact
  const deleteContact = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) return

    try {
      const { error: deleteError } = await supabase
        .from('contacts')
        .delete()
        .eq('id', id)

      if (deleteError) throw deleteError

      setContacts(contacts.filter(c => c.id !== id))
      setSelectedContact(null)
      console.log(`✅ Contact #${id} deleted`)
    } catch (err) {
      console.error('❌ Error deleting contact:', err)
    }
  }

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  // Get status badge color
  const getStatusColor = (status) => {
    switch (status) {
      case 'new':
        return 'blue'
      case 'read':
        return 'orange'
      case 'responded':
        return 'green'
      default:
        return 'gray'
    }
  }

  return (
    <div className="contact-admin">
      <div className="admin-header">
        <h1>📬 Contact Submissions</h1>
        <p className="admin-subtitle">Manage all contact form submissions</p>
      </div>

      {/* Stats */}
      <div className="admin-stats">
        <div className="stat">
          <h3>{totalCount}</h3>
          <p>Total Contacts</p>
        </div>
        <div className="stat">
          <h3>{contacts.filter(c => c.status === 'new').length}</h3>
          <p>New</p>
        </div>
        <div className="stat">
          <h3>{contacts.filter(c => c.status === 'read').length}</h3>
          <p>Read</p>
        </div>
        <div className="stat">
          <h3>{contacts.filter(c => c.status === 'responded').length}</h3>
          <p>Responded</p>
        </div>
      </div>

      {/* Filter */}
      <div className="admin-controls">
        <div className="filter-tabs">
          {['all', 'new', 'read', 'responded'].map(tab => (
            <button
              key={tab}
              className={`filter-btn ${filter === tab ? 'active' : ''}`}
              onClick={() => setFilter(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <button className="refresh-btn" onClick={fetchContacts}>
          🔄 Refresh
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="error-alert">
          ❌ Error: {error}
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading contacts...</p>
        </div>
      )}

      {/* No Contacts */}
      {!loading && contacts.length === 0 && (
        <div className="no-contacts">
          <p>📭 No contacts found</p>
        </div>
      )}

      {/* Contacts List */}
      {!loading && contacts.length > 0 && (
        <div className="admin-content">
          {/* Contacts Table */}
          <div className="contacts-list">
            <div className="contacts-header">
              <div className="col-status">Status</div>
              <div className="col-name">Name</div>
              <div className="col-email">Email</div>
              <div className="col-phone">Phone</div>
              <div className="col-date">Date</div>
              <div className="col-actions">Actions</div>
            </div>

            {contacts.map(contact => (
              <div
                key={contact.id}
                className={`contacts-row ${selectedContact?.id === contact.id ? 'selected' : ''}`}
                onClick={() => setSelectedContact(contact)}
              >
                <div className="col-status">
                  <span className={`status-badge status-${getStatusColor(contact.status)}`}>
                    {contact.status}
                  </span>
                </div>
                <div className="col-name">{contact.name}</div>
                <div className="col-email">{contact.email}</div>
                <div className="col-phone">{contact.phone || '-'}</div>
                <div className="col-date">{formatDate(contact.created_at)}</div>
                <div className="col-actions">
                  <button className="action-btn view" title="View">👁️</button>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Details Panel */}
          {selectedContact && (
            <div className="contact-details">
              <div className="details-header">
                <h2>Contact Details</h2>
                <button className="close-btn" onClick={() => setSelectedContact(null)}>✕</button>
              </div>

              <div className="details-content">
                <div className="detail-group">
                  <label>Name</label>
                  <p>{selectedContact.name}</p>
                </div>

                <div className="detail-group">
                  <label>Email</label>
                  <p>
                    <a href={`mailto:${selectedContact.email}`}>
                      {selectedContact.email}
                    </a>
                  </p>
                </div>

                <div className="detail-group">
                  <label>Phone</label>
                  <p>{selectedContact.phone || 'Not provided'}</p>
                </div>

                <div className="detail-group">
                  <label>Status</label>
                  <p>
                    <span className={`status-badge status-${getStatusColor(selectedContact.status)}`}>
                      {selectedContact.status}
                    </span>
                  </p>
                </div>

                <div className="detail-group">
                  <label>Submitted</label>
                  <p>{formatDate(selectedContact.created_at)}</p>
                </div>

                <div className="detail-group">
                  <label>Message</label>
                  <p className="message-text">{selectedContact.message}</p>
                </div>

                {/* Action Buttons */}
                <div className="detail-actions">
                  {selectedContact.status !== 'read' && (
                    <button
                      className="action-btn-large btn-read"
                      onClick={() => updateStatus(selectedContact.id, 'read')}
                    >
                      ✓ Mark as Read
                    </button>
                  )}

                  {selectedContact.status !== 'responded' && (
                    <button
                      className="action-btn-large btn-responded"
                      onClick={() => updateStatus(selectedContact.id, 'responded')}
                    >
                      ✓✓ Mark as Responded
                    </button>
                  )}

                  <button
                    className="action-btn-large btn-delete"
                    onClick={() => deleteContact(selectedContact.id)}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ContactAdmin
