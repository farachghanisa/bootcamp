describe('API Automation Reqres', () => {

  const baseUrl = 'https://reqres.in/api'
  const apiKey = 'reqres-free-v1'

  it('TC01 - GET List Users', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/users?page=2`,
      headers: {
        'x-api-key': apiKey
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.page).to.eq(2)
      expect(response.body.data.length).to.be.greaterThan(0)
    })
  })

  it('TC02 - GET Single User', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/users/2`,
      headers: {
        'x-api-key': apiKey
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.data.id).to.eq(2)
      expect(response.body.data.email).to.include('@reqres.in')
    })
  })

  it('TC03 - GET User Not Found', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/users/23`,
      headers: {
        'x-api-key': apiKey
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(401)
    })
  })

  it('TC04 - POST Create User', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/users`,
      headers: {
        'x-api-key': apiKey
      },
        body: {
        name: "Farach",
        job: "QA Engineer"
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.name).to.eq("Farach")
      expect(response.body.job).to.eq("QA Engineer")
      expect(response.body).to.have.property('id')
    })
  })

  it('TC05 - PUT Update User', () => {
    cy.request({
      method: 'PUT',
      url: `${baseUrl}/users/2`,
      headers: {
        'x-api-key': apiKey
      },
      body: {
        name: "Farach Update",
        job: "Senior QA"
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.name).to.eq("Farach Update")
      expect(response.body.job).to.eq("Senior QA")
    })
  })

  it('TC06 - DELETE User', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/users/2`,
      headers: {
        'x-api-key': apiKey
      }
    }).then((response) => {
      expect(response.status).to.eq(204)
    })
  })
  
  it('TC07 - POST Register Successful', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/register`,
      headers: {
        'x-api-key': apiKey
      },
      body: {
        email: "eve.holt@reqres.in",
        password: "pistol"
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id')
      expect(response.body).to.have.property('token')
    })
  })

})