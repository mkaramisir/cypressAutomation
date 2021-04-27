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
    
      it("validate store id",function(){
          
         assert.isTrue(/^[0-9]+$/.test(this.receipt.storeId.slice(3,6)),'last three digits')
         assert.isTrue(/^[A-Z]+$/.test(this.receipt.storeId.slice(0,3)),'first three capital letter')

      })

      it("pincode validation",function(){
          expect(this.receipt.pinCode.toString().length).to.be.equal(5)
            
      })

      it("item fields validation",function(){
          
      })



})