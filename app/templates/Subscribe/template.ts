export const emailTemplate = `
  <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 20px 0; text-align: center; background-color: #f0f4f8;">
          <h1 style="color: #007bff; margin: 0;">Konnect Finance</h1> <p style="margin-top:0px; font-size:14px">Your Financial Control Center</p>
        </td>
      </tr>
      <tr>
        <td style="padding: 20px;">
          <h2 style="color: #2c3e50; margin-bottom: 16px;">Welcome!</h2>
          <p style="font-size: 16px; line-height: 1.6;">
            Thank you for subscribing to Konnect Finance.  We're excited to help you manage your payments and finances with ease.
          </p>
          <p style="font-size: 16px; line-height: 1.6;">
            Here's a quick summary of your subscription:
          </p>
          <ul style="list-style-type: none; padding-left: 0; margin-bottom: 20px;">
            <li style="margin-bottom: 8px; font-size: 16px;">
              <strong>Email:</strong> \${email}
            </li>
            <li style="margin-bottom: 8px; font-size: 16px;">
              <strong>Subscription Date:</strong> \${subscriptionDate}
            </li>
          </ul>
           <p style="font-size: 16px; line-height: 1.6;">
            Key Features of Konnect Finance:
           </p>
           <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
            <li style="margin-bottom: 8px; font-size: 16px;">
              <strong>Payment Tracking:</strong> Monitor incoming and outgoing payments.
            </li>
            <li style="margin-bottom: 8px; font-size: 16px;">
              <strong>Financial Reporting:</strong> Generate detailed reports.
            </li>
             <li style="margin-bottom: 8px; font-size: 16px;">
              <strong>Budgeting Tools:</strong> Stay on top of your finances.
            </li>
           </ul>
          <p style="font-size: 16px; line-height: 1.6;">
            <a href="#" style="color: #007bff; text-decoration: none; font-weight: bold;">Click here</a> to get started and explore your dashboard.
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding: 20px 0; text-align: center; background-color: #f0f4f8; font-size: 14px; color: #888;">
          &copy; \${currentYear} Konnect Finance. All rights reserved.
        </td>
      </tr>
    </table>
  </div>
`;
