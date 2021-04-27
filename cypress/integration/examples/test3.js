describe('Mumin Karamisir',function(){

    beforeEach(function(){
       cy.fixture('example').then(function(receipt){
        this.receipt=receipt
       }) 
       
    })

    

    it("countOfItems",function(){   
        
      expect( this.receipt.items.filter(function(value){
          return value.itemPrice>=0
       }).length).to.equal(this.receipt.itemsSold)

       })
       
       

         
          
       
            
        })
      
            
    
    