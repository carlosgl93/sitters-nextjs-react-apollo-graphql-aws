/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updateSitting = /* GraphQL */ `
  mutation UpdateSitting(
    $input: UpdateSittingInput!
    $condition: ModelSittingConditionInput
  ) {
    updateSitting(input: $input, condition: $condition) {
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
export const deleteSitting = /* GraphQL */ `
  mutation DeleteSitting(
    $input: DeleteSittingInput!
    $condition: ModelSittingConditionInput
  ) {
    deleteSitting(input: $input, condition: $condition) {
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
export const createSitter = /* GraphQL */ `
  mutation CreateSitter(
    $input: CreateSitterInput!
    $condition: ModelSitterConditionInput
  ) {
    createSitter(input: $input, condition: $condition) {
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
export const updateSitter = /* GraphQL */ `
  mutation UpdateSitter(
    $input: UpdateSitterInput!
    $condition: ModelSitterConditionInput
  ) {
    updateSitter(input: $input, condition: $condition) {
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
export const deleteSitter = /* GraphQL */ `
  mutation DeleteSitter(
    $input: DeleteSitterInput!
    $condition: ModelSitterConditionInput
  ) {
    deleteSitter(input: $input, condition: $condition) {
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
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
export const createSitting = /* GraphQL */ `
  mutation CreateSitting(
    $input: CreateSittingInput!
    $condition: ModelSittingConditionInput
  ) {
    createSitting(input: $input, condition: $condition) {
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
