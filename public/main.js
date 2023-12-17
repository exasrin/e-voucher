// Fetch and display the list of vouchers when the page loads
document.addEventListener('DOMContentLoaded', function () {
    getVouchers();
    getTransactions();
  });
  
  // Function to fetch and display the list of vouchers
  function getVouchers() {
    fetch('http://localhost:5000/vouchers')
      .then(response => response.json())
      .then(data => displayVouchers(data))
      .catch(error => console.error('Error:', error));
  }
  
  // Function to display the list of vouchers in the table
  function displayVouchers(vouchers) {
    const tableBody = document.querySelector('#voucherTable tbody');
    tableBody.innerHTML = '';
  
    vouchers.forEach(voucher => {
      const row = tableBody.insertRow();
      row.innerHTML = `
        <td>${voucher._id}</td>
        <td>${voucher.code}</td>
        <td>${voucher.amount}</td>
        <td>
          <button onclick="updateVoucher('${voucher._id}')">Update</button>
          <button onclick="deleteVoucher('${voucher._id}')">Delete</button>
        </td>
      `;
    });
  }
  
  // Function to create a new voucher
  function createVoucher() {
    const voucherCode = document.getElementById('voucherCode').value;
    const voucherAmount = document.getElementById('voucherAmount').value;
  
    fetch('http://localhost:5000/vouchers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code: voucherCode,
        amount: voucherAmount,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Voucher created:', data);
        getVouchers(); // Refresh the list after creating a new voucher
        document.getElementById('voucherForm').reset(); // Clear the form
      })
      .catch(error => console.error('Error:', error));
  }
  
  // Function to update a voucher
  function updateVoucher(id) {
    // Implement update logic here
    console.log('Update voucher with ID:', id);
  }
  
  // Function to delete a voucher
  function deleteVoucher(id) {
    fetch(`http://localhost:5000/vouchers/${id}`, {
      method: 'DELETE',
    })
      .then(() => getVouchers()) // Refresh the list after deleting a voucher
      .catch(error => console.error('Error:', error));
  }
  
  // Function to fetch and display the list of transactions
  function getTransactions() {
    fetch('http://localhost:5000/transactions')
      .then(response => response.json())
      .then(data => displayTransactions(data))
      .catch(error => console.error('Error:', error));
  }
  
  // Function to display the list of transactions in the table
  function displayTransactions(transactions) {
    const tableBody = document.querySelector('#transactionTable tbody');
    tableBody.innerHTML = '';
  
    transactions.forEach(transaction => {
      const row = tableBody.insertRow();
      row.innerHTML = `
        <td>${transaction._id}</td>
        <td>${transaction.voucher.code}</td>
        <td>${transaction.amount}</td>
        <td>
          <button onclick="updateTransaction('${transaction._id}')">Update</button>
          <button onclick="deleteTransaction('${transaction._id}')">Delete</button>
        </td>
      `;
    });
  }
  
  // Function to create a new transaction
  function createTransaction() {
    const transactionVoucher = document.getElementById('transactionVoucher').value;
    const transactionAmount = document.getElementById('transactionAmount').value;
  
    fetch('http://localhost:5000/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        voucher: transactionVoucher,
        amount: transactionAmount,
      }),
    })
      .then(response => response.json())
      .then(() => {
        getTransactions(); // Refresh the list after creating a new transaction
        document.getElementById('transactionForm').reset(); // Clear the form
      })
      .catch(error => console.error('Error:', error));
  }
  
  // Function to update a transaction
  function updateTransaction(id) {
    // Implement update logic here
    console.log('Update transaction with ID:', id);
  }
  
  // Function to delete a transaction
  function deleteTransaction(id) {
    fetch(`http://localhost:5000/transactions/${id}`, {
      method: 'DELETE',
    })
      .then(() => getTransactions()) // Refresh the list after deleting a transaction
      .catch(error => console.error('Error:', error));
  }
  