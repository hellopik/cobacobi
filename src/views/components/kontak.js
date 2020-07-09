    import React from 'react'

    const Contacts = ({ contacts }) => {
      return (
        <div>
          <center><h1>Contact List</h1></center>
          {contacts.map((contact) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{contact.feed.entry[i]['gsx$_cn6ca']['$t']}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{contact.feed.entry[i]['gsx$_cokwr']['$t']}</h6>
                <p class="card-text">{contact.feed.entry[i]['gsx$_cpzh4']['$t']}</p>
              </div>
            </div>
          ))}
        </div>
      )
    };
 export default Contacts