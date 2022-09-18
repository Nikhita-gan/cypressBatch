
///<reference types = "cypress"/>

describe("Verify the Amazone Site",function(){

    Cypress.on('uncaught:exception',function(el,runnable){
        return false
    })

    it("TC-01 check the drop down in amazone site",function(){
        cy.visit("https://www.amazon.in/")
        cy.get('#twotabsearchtextbox').type('iphone 12')
           
        cy.get('.autocomplete-results-container').find('.s-suggestion-container').each(function(el){
            cy.log(el.text().trim())
           if(el.text().trim()=="iphone 12 pro max cover"){
            el.click()
            return false
           }
        })

    })
    it.only("TC-01 check the drop down in flipkart site",function(){
        cy.visit("https://www.flipkart.com/")
        cy.get("._3704LK").type("electronic")
        cy.wait(2000)
        cy.get('.Y5N33s').find('[class="lrtEPN _17d0yO"]').each(function(el){
            // cy.log(el.text().trim())

            if(el.text().trim()=="electronic watch"){
                el.click()
                return false
            }
        })
        
        })

})