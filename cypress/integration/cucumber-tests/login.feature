Feature: Login to Application

    As a valid user
    I want to log in into Application

    Scenario: Invalid login
        Given I open web site
        When I login the application with invalid credentials
        Then I should see an error message

    Scenario: Valid login
        Given I open web site
        When I login with the valid credentials:
            | username                  | password |
            | magin.bianchi@incluit.com | Magin123 |
        Then I should see the "Your Feed" tab