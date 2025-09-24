# saucedemo_Login_Automation
This repository contains Cypress automation scripts for testing the login functionality of the SauceDemo
 web application. It includes test cases for valid login, invalid login, error messages, and Login using keyboard actions. The project follows the Page Object Model (POM) design pattern for better maintainability and readability.

 Module: Login

Test Case ID: TC_LOGIN_01
Title: Login with a valid Username and a valid password
Preconditions:
•	Must be on the login page
Test Steps:
1.	Type Username
2.	Type password
3.	Try to proceed.
Test Data:
•	Username: standard_user
•	Password: secret_sauce
Expected Result:
•	Redirect to the inventory page



Test Case ID: TC_LOGIN_02
Title: Login with a valid Username and an invalid password.
Preconditions:
•	Must be on the login page
Test Steps:
1.	Type a valid Username
2.	Type an invalid password 
3.	Try to proceed. 
Test Data:
•	Username: standard_user
•	Password: Wrong@123
Expected Result:
•	Show error: Invalid credentials





Test Case ID: TC_LOGIN_03
Title: Login with an invalid Username and a valid password.
Preconditions:
•	Must be on the login page
Test Steps:
1.	Type an invalid Username
2.	Type a valid password
3.	Try to proceed.
Test Data:
•	Username: wrong_user
•	Password: secret_sauce
Expected Result:
•	Show error: Invalid credentials


Test Case ID: TC_LOGIN_04
Title: Login with both Username and password is invalid
Preconditions:
•	Must be on the login page
Test Steps:.   
1.	Type an invalid Username
2.	Type an invalid password
3.	Try to proceed.
•	Test Data:
•	Username: wrong_user
•	 Password: secret_sauce
Expected Result:
•	Show error: Invalid credentials


Test Case ID: TC_LOGIN_05
Title: Attempt login with empty Username field
Preconditions:
•	Must be on the login page
Test Steps:
1.	Leave Username field blank 
2.	Type a valid password
3.	Try to proceed.
Test Data:
•	Blank ID 
•	 Password:  secret_sauce
Expected Result:
•	Show error: The doptor id field is required.

Test Case ID: TC_LOGIN_06
Title: Attempt login with empty password field
Preconditions:
•	Must be on the login page
Test Steps:
1.	Type a valid Username
2.	Leave the password field blank 
3.	Try to proceed.
Test Data:
•	Username: standard_user
•	Blank Password
Expected Result:
•	Show error: The password field is required.


Test Case ID: TC_LOGIN_07
Title: Attempt login with both fields blank
Preconditions:
•	Must be on the login page
Test Steps:
1.	Leave both field blank 
2.	Try to proceed.
Test Data:
•	Blank ID 
•	Blank Password
Expected Result:
•	Show error: The doptor id field is required.
•	Show error: The password field is required.


Test Case ID: TC_LOGIN_08
Title: Check the password field is masked
Preconditions: 
•	Must be on the login page
Test Steps:
1.	Locate the password input field.
2.	Type password into the password field.
Test Data:
•	Password:  secret_sauce
Expected Result:
•	Input should be hidden



Test Case ID: TC_LOGIN_09
Title: Login using Enter key
Preconditions: 
•	User is on the login page
Test Steps:
1.	Enter valid Username and password.
2.	Press Enter key instead of clicking the login button.
Test Data:
•	Fill fields and press Enter
Expected Result:
•	Should behave same as clicking Login button



Test Case ID: TC_LOGIN_10
Title: Session timeout after login
Preconditions: 
•	The user is logged in successfully.
Test Steps:
1.	Log in with Username and Password.
2.	Verify the user is on the inventory.
3.	Simulate session timeout by clearing cookies and localStorage.
4.	Attempt to access the dashboard again.
Test Data:
•	Valid Username
•	Valid Password
Expected Result:
•	The user should be redirected back to the login page

