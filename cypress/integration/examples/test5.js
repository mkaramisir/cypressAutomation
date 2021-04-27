   
describe('Mumin Karamisir',function(){

    beforeEach(function(){
       cy.fixture('example2').then(function(receiptArray){
        this.receiptArray=receiptArray
       }) 
       
    })

    

    it("countOfItems",function(){   
        
        const receiptArray = this.receiptArray
       
      console.log(mostSoldItem(receiptArray))
       })
    })
       

    function  mostSoldItem(receiptArray){
        var itemIdMap = new Map()
       
        for(let i=0 ; i<receiptArray.length ; i++){
           for(let j=0 ; j < receiptArray[i].items.length ; j++){
               itemIdMap.set(receiptArray[i].items[j].itemId , 0)
           }
        }
        let max =0;
        let mostSoldItemId ;
 
        for(let i=0 ; i<receiptArray.length ; i++){
         for(let j=0 ; j < receiptArray[i].items.length ; j++){
            if(itemIdMap.get(receiptArray[i].items[j].itemId)>=0){
                
               itemIdMap.set(receiptArray[i].items[j].itemId , itemIdMap.get(receiptArray[i].items[j].itemId) +1)  
               if(max < itemIdMap.get(receiptArray[i].items[j].itemId)){
                    max = itemIdMap.get(receiptArray[i].items[j].itemId)
                    mostSoldItemId = receiptArray[i].items[j].itemId
             }  
            }
         }
      }
      return mostSoldItemId
    }