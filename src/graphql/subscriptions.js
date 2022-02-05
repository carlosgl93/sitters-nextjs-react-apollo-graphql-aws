/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSitter = /* GraphQL */ `
  subscription OnCreateSitter($owner: String) {
    onCreateSitter(owner: $owner) {
      id
      name
      email
      age
      studies
      phone
      reviews
      sittings {
        items {
          id
          location
          date
          sitterID
          customerID
          createdAt
          updatedAt
          sitterSittingsId
          customerSittingsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateSitter = /* GraphQL */ `
  subscription OnUpdateSitter($owner: String) {
    onUpdateSitter(owner: $owner) {
      id
      name
      email
      age
      studies
      phone
      reviews
      sittings {
        items {
          id
          location
          date
          sitterID
          customerID
          createdAt
          updatedAt
          sitterSittingsId
          customerSittingsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteSitter = /* GraphQL */ `
  subscription OnDeleteSitter($owner: String) {
    onDeleteSitter(owner: $owner) {
      id
      name
      email
      age
      studies
      phone
      reviews
      sittings {
        items {
          id
          location
          date
          sitterID
          customerID
          createdAt
          updatedAt
          sitterSittingsId
          customerSittingsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($owner: String) {
    onCreateCustomer(owner: $owner) {
      id
      name
      email
      age
      address
      phone
      sittings {
        items {
          id
          location
          date
          sitterID
          customerID
          createdAt
          updatedAt
          sitterSittingsId
          customerSittingsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($owner: String) {
    onUpdateCustomer(owner: $owner) {
      id
      name
      email
      age
      address
      phone
      sittings {
        items {
          id
          location
          date
          sitterID
          customerID
          createdAt
          updatedAt
          sitterSittingsId
          customerSittingsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($owner: String) {
    onDeleteCustomer(owner: $owner) {
      id
      name
      email
      age
      address
      phone
      sittings {
        items {
          id
          location
          date
          sitterID
          customerID
          createdAt
          updatedAt
          sitterSittingsId
          customerSittingsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateSitting = /* GraphQL */ `
  subscription OnCreateSitting($owner: String) {
    onCreateSitting(owner: $owner) {
      id
      location
      date
      sitterID
      customerID
      createdAt
      updatedAt
      sitterSittingsId
      customerSittingsId
      owner
    }
  }
`;
export const onUpdateSitting = /* GraphQL */ `
  subscription OnUpdateSitting($owner: String) {
    onUpdateSitting(owner: $owner) {
      id
      location
      date
      sitterID
      customerID
      createdAt
      updatedAt
      sitterSittingsId
      customerSittingsId
      owner
    }
  }
`;
export const onDeleteSitting = /* GraphQL */ `
  subscription OnDeleteSitting($owner: String) {
    onDeleteSitting(owner: $owner) {
      id
      location
      date
      sitterID
      customerID
      createdAt
      updatedAt
      sitterSittingsId
      customerSittingsId
      owner
    }
  }
`;
