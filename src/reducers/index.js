import { combineReducers } from "redux";

import BooksReducers from "./reducer_books";
import AuthorsReducers from "./reducer_authors";
import ActiveReducer from "./reducer_active_book";

const rootReducer = combineReducers({
  books: BooksReducers,
  authors: AuthorsReducers,
  activebook: ActiveReducer
});

export default rootReducer;
