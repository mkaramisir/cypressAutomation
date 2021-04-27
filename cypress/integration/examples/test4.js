   
describe('Mumin Karamisir',function(){

    beforeEach(function(){
       cy.fixture('example2').then(function(receiptArray){
        this.receiptArray=receiptArray
       }) 
       
    })

    

    it("countOfItems",function(){   
        
        const receiptArray = this.receiptArray
        var receiptNumberArray =[]
        const timestamp = receiptArray[0].timestamp.slice(0,10)
       for(let i=0 ; i<receiptArray.length ; i++){
           if(receiptArray[i].timestamp.slice(0,10) === timestamp){
            receiptNumberArray.push(receiptArray[i].receiptNumber)}
       }
       expect(new Set(receiptNumberArray).size).to.equal(receiptNumberArray.length)

       var pincodeSet = new Set()
       for(let i=0 ; i<receiptArray.length ; i++){
        if(receiptArray[i].timestamp.slice(0,10) === timestamp){
       pincodeSet.add(receiptNumberArray[i].pinCode)}
   }
   expect(pincodeSet.size).to.equal(1)
       })
    })
       