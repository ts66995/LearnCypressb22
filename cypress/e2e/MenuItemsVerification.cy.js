//<reference types="cypress" />
import data from "../fixtures/login.json"
describe("Menu items verification", () => {
    const menuItems = {
        item1: "Admin",
        item2: "PIM",
        item3: "Time",
        item4: "Recruitment",
        item5: "My Info",
        item6: "Performance",
        item7: "Dashboard",
        item8: "Directory",
        item9: "Maintenance",
        item10: "Claim",
        item11: "Buzz"
    }
    it("Verify all menu items", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.wait(100)
        cy.get("input[placeholder='Username']").type(data.userName)
        cy.get("input[placeholder='Password']").type(data.password)
        cy.get("button[type='submit']").click()
        cy.log("Clicked on Login button")
        cy.contains("Dashboard").should("be.visible")
        for (let item in menuItems) {
            cy.contains(menuItems[item]).should("be.visible")
        }
        cy.wait(5000)
    })
})