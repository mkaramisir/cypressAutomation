describe('Mumin Karamisir',function(){

    beforeEach(function(){
       cy.fixture('example').then(function(receipt){
        this.receipt=receipt
       }) 
    })

    

    it("Compare Total Price",function(){

        var sum=0;
        this.receipt.items.forEach(function(element){
            sum+=(element.itemPrice+(element.itemPrice*element.taxRate)-element.discount)
            
        })
        expect(this.receipt.total).to.equal(sum)
            
    
      })

      it("priceExist",function(){
         this.receipt.items.forEach(function(element){
             cy.valueExist(element.itemPrice)
         })
      })
    
      

      

      


})