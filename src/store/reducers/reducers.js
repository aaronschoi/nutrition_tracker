export const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case "authenticated":
      return true;
    case "deauthenticated":
      return false;
    default:
      return state;
  }
};

export const user = (state = {}, action) => {
  switch (action.type) {
    case "retrieve-user":
      return { ...action.payload };
    case "logged-out":
      return {};
    default:
      return state;
  }
};

export const foodlog = (state = [], action) => {
  switch (action.type) {
    case "retrieve-foodlog":
      const newState = Array.isArray(action.payload) ? [...action.payload] : [];
      return newState;
    case "remove-foodlog":
      return [];
    default:
      return state;
  }
};

export const targetFood = (state = {}, action) => {
  switch (action.type) {
    case "new-target":
      return { ...action.payload };
    case "no-target":
      return {};
    default:
      return state;
  }
};

export const users = (state = [], action) => {
  switch (action.type) {
    case "load-users":
      const newState = Array.isArray(action.payload) ? [...action.payload] : [];
      return newState;
    case "unload-all":
      return [];
    default:
      return state;
  }
};


export const errors = (state = "", action) => {
  switch (action.type) {
    case "load-error":
      return action.payload;
    case "unload-error":
      return "";
    default:
      return state;
  }
}

export const panel = (state = true, action) => {
  switch (action.type) {
    case "panel-off":
      return false;
    case "panel-on":
      return true;
    default:
      return state;
  }
}