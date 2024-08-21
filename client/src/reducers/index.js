import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import user from "./user";
import transaction from "./transaction";
export default combineReducers({
  auth,
  alert,
  user,
  transaction,
});
