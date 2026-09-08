//<reference types="cypress" />
import data from "../fixtures/login.json"
describe("Login functionality", () => {
    it("Positive case", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.wait(100)
        cy.get("input[placeholder='Username']").type(data.userName)
        cy.get("input[placeholder='Password']").type(data.password)
        // cy.get("button[type='submit']").click()
          cy.xpath("//button[@type='submit']").click()
        cy.log("Clicked on Login button")
        cy.contains("Dashboard").should("be.visible")
    })
    it("Negative case", () => {
        cy.viewport("iphone-8")
        cy.visit("/web/index.php/auth/login")// using base url from cypress.config.js file
        cy.get("input[placeholder='Username']").type(data.userName)
        cy.get("input[placeholder='Password']").type(data.wrongUserName)
        cy.get("button[type='submit']").click()
        //We can use as below when multiple elements are matching ex: index and last(),first() etc..
        // cy.get("button[type='submit']").eq(0).click()
        // cy.get("button[type='submit']").last().click()
        cy.contains("Invalid credentials").should("be.visible")
    })
    it("Buzz Test case", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.wait(100)
        cy.get("input[placeholder='Username']").type(data.userName)
        cy.get("input[placeholder='Password']").type(data.password)
        cy.get("button[type='submit']").click()
        cy.log("Clicked on Login button")
        cy.contains("Buzz").click()
        cy.contains("Buzz Newsfeed").should("be.visible")
        cy.get(`textarea[placeholder="What's on your mind?"]`).type("Sample feed")
        cy.get("button[type='submit']").click()
        cy.contains("Successfully Saved").should("be.visible")
    })
})