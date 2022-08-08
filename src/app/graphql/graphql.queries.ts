import { gql } from 'apollo-angular';

const CREATE_EVENT_CATEGORY = gql`
  mutation ($NAME: String!, $DESCRIPTION: String!, $ACTIVE_FLAG: Boolean!) {
    createEventCategory(
      dataInput: {
        name: $NAME
        description: $DESCRIPTION
        active_flag: $ACTIVE_FLAG
      }
    ) {
      name
      description
      active_flag
    }
  }
`;

const UPDATE_EVENT_CATEGORY = gql`
  mutation (
    $ID: String!
    $NAME: String!
    $DESCRIPTION: String!
    $ACTIVE_FLAG: Boolean!
  ) {
    updateEventCategory(
      id: $ID
      change: {
        name: $NAME
        description: $DESCRIPTION
        active_flag: $ACTIVE_FLAG
      }
    ) {
      _id
      name
      description
      active_flag
    }
  }
`;

const DELETE_EVENT_CATEGORY = gql`
  mutation ($ID: String!) {
    removeEventcategory(id: $ID) {
      _id
      name
      description
      active_flag
    }
  }
`;

const Get_getAllEventCategory = gql`
  query {
    getAllEventCategory {
      _id
      name
      description
      active_flag
    }
  }
`;

const Get_searchEventCategory = gql`
  query ($NAME: String!, $ACTIVE_FLAG: Boolean) {
    searchEventCategory(filter: { name: $NAME, active: $ACTIVE_FLAG }) {
      _id
      name
      description
      active_flag
    }
  }
`;

const Get_getEventCategoryByName = gql`
  query ($NAME: String!) {
    getEventCategoryByName(name: $NAME) {
      _id
      name
      description
      active_flag
    }
  }
`;

const Get_getEventCategoryById = gql`
  query ($ID: String!) {
    getEventCategoryById(id: $ID) {
      _id
    }
  }
`;

const Get_getEventCategory = gql`
  query ($ID: String!) {
    getEventCategoryById(id: $ID) {
      _id
      name
      description
      active_flag
    }
  }
`;

export {
  CREATE_EVENT_CATEGORY,
  UPDATE_EVENT_CATEGORY,
  DELETE_EVENT_CATEGORY,
  Get_getAllEventCategory,
  Get_getEventCategoryByName,
  Get_getEventCategoryById,
  Get_getEventCategory,
  Get_searchEventCategory,
};
