function PrivacyPolicy() {
  return (
    <div className="card">
      <h2>Privacy Policy</h2>
      <p className="page-desc"><strong>Effective date:</strong> July 2, 2025</p>
      <p>Thank you for choosing to use <strong>Beermate</strong> (the "App"). Your privacy is important to us.</p>
      <ol style={{ textAlign: 'left', margin: '2rem auto', maxWidth: 600 }}>
        <li><strong>No Personal Data Collection</strong><br />
          This app does not collect, store, or share any personal information or data from users. When you use the App, no information about you or your device is collected or transmitted.
        </li>
        <li><strong>No Tracking or Analytics</strong><br />
          The App does not use any analytics tools, tracking technologies, or third-party services that collect user data.
        </li>
        <li><strong>Data Security</strong><br />
          Since we do not collect any personal data, we do not process, store, or secure user data.
        </li>
        <li><strong>Children's Privacy</strong><br />
          This app does not knowingly collect any information from children under the age of 13.
        </li>
        <li><strong>Changes to This Privacy Policy</strong><br />
          If in the future we update the App to collect data or use analytics, we will update this Privacy Policy accordingly and notify you by revising the effective date.
        </li>
        <li><strong>Contact Us</strong><br />
          If you have any questions or concerns about this Privacy Policy, please contact us at:<br />
          <a href="mailto:your@email.com">your@email.com</a>
        </li>
      </ol>
      <hr style={{ margin: '2rem 0' }} />
      <div style={{ textAlign: 'center', color: '#888' }}>
        <div>Beermate</div>
        <div>[Your Company Name or Developer Name]</div>
      </div>
    </div>
  )
}

export default PrivacyPolicy 