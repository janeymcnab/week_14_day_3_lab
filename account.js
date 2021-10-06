const Account = function (transactions){
    this.transactions = []
}
Account.prototype.addTransaction = function(newTransaction){
    this.transactions.push(newTransaction);
    console.log('Transactions:', this.transactions);
}
module.exports = Account;