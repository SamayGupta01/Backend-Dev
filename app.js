import newMember from "./NewMember.js";
import addBook from "./addbook.js";
import borrowRecord from "./borrowbook.js";

addBook("B001", "Atomic Habits", "James Clear", 300);
addBook("B002", "The Alchemist", "Paulo Coelho", 250);
addBook("B003", "Deep Work", "Cal Newport", 350);

newMember("Amit Verma", "amit@gmail.com", "gold");
newMember("Neha Singh", "neha@gmail.com", "silver");
newMember("Priya Gupta", "priya@gmail.com", "gold");

borrowRecord("Amit Verma", "Atomic Habits", 1);
borrowRecord("Neha Singh", "The Alchemist", 3);
borrowRecord("Priya Gupta", "Deep Work", 2);
