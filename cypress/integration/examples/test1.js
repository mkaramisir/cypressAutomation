describe('Mumin Karamisir',function(){

    beforeEach(function(){
       cy.fixture('example').then(function(receipt){
        this.receipt=receipt
       }) 
    })


    
      it("validate store id",function(){
         cy.valueExist(this.receipt.storeId)
         assert.isTrue(/^[0-9]+$/.test(this.receipt.storeId.slice(3,6)),'last three digits')
         assert.isTrue(/^[A-Z]+$/.test(this.receipt.storeId.slice(0,3)),'first three capital letter')

      })

      

      it("pincode validation",function(){
          cy.valueExist(this.receipt.pinCode)
          expect(this.receipt.pinCode)
          expect(this.receipt.pinCode.toString().length).to.be.equal(5)
            
      })

      it("itemId",function(){
          cy.valueExist(this.receipt.pinCode)
          expect('this.receipt.itemId').to.be.a('string')
      })
       
      it("taxRate",function(){
        this.receipt.items.forEach(function(element){
           cy.valueExist (element.taxRate)
           expect(element.taxRate).to.be.within(0,1)
        })
      })


})