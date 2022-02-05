/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSitter = /* GraphQL */ `
  query GetSitter($id: ID!) {
    getSitter(id: $id) {
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
export const listSitters = /* GraphQL */ `
  query ListSitters(
    $filter: ModelSitterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSitters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        age
        studies
        phone
        reviews
        sittings {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        age
        address
        phone
        sittings {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getSitting = /* GraphQL */ `
  query GetSitting($id: ID!) {
    getSitting(id: $id) {
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
export const listSittings = /* GraphQL */ `
  query ListSittings(
    $filter: ModelSittingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSittings(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
