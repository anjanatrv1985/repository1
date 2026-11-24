# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: flaky.spec.js >> Flaky test 2
- Location: tests\flaky.spec.js:16:1

# Error details

```
ReferenceError: c is not defined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - paragraph [ref=e3]:
    - link "PMP Practice" [ref=e4] [cursor=pointer]:
      - /url: https://pmp.expandtesting.com/
    - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
    - link "Try Cloud Tools" [ref=e5] [cursor=pointer]
  - banner [ref=e10]:
    - navigation "Main navigation" [ref=e11]:
      - link "SUT" [ref=e12] [cursor=pointer]:
        - /url: /
        - 'img "Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman." [ref=e13]'
        - text: Practice
      - generic [ref=e14]:
        - list [ref=e15]:
          - listitem [ref=e16]:
            - button "Demos" [ref=e17] [cursor=pointer]
          - listitem [ref=e18]:
            - link "Tools" [ref=e19] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e20]:
            - link "Tips" [ref=e21] [cursor=pointer]:
              - /url: /tips
          - listitem [ref=e22]:
            - link "Test Cases" [ref=e23] [cursor=pointer]:
              - /url: /test-cases
          - listitem [ref=e24]:
            - link "API Testing" [ref=e25] [cursor=pointer]:
              - /url: /notes/api/api-docs/
          - listitem [ref=e26]:
            - link "About" [ref=e27] [cursor=pointer]:
              - /url: /about
        - list
        - link "Free ISTQB Mock Exams" [ref=e28] [cursor=pointer]:
          - /url: https://istqb.expandtesting.com/
  - main [ref=e29]:
    - insertion [ref=e33]:
      - iframe [ref=e35]:
        - generic [ref=f3e1]:
          - generic [ref=f3e5]:
            - generic [ref=f3e6]:
              - link [ref=f3e7] [cursor=pointer]:
                - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CGNNedkTzar3yA7P1qfkPj-a7kA_hmIDligG-85LujxbXuKyvkSoQASCVlJmjAWDlgoCAuA6gAceVwb8-yAEJqAMByAPLBKoElAJP0GU-GALPuAXfd1X5TcoNmhdLFVA1ZvSiH_D1GkwKZOIA2RSrYco0LlFQVDKRlUk4ONMWV-dwHrcE63DAyAlND1k0z2j3__TCLGDpNHAIdO06V4rNOz_gqlL8TkwhspJSUPLMn1SQ_gb5-17f4pxheHO22tMnoajoVCq4h7uwt2u2Rev4eepV4hfcLCaXW-fAwpjB10fZocRtNNNTTs-idVrt1I0PKmnE1DQpmm7B6XC25pWWLAxsWwzhPGVxEpXSpw0x1MvIvqyG9UNYTjwc4WsUJcJrkKze1BmvFsKROPo5VSnwtRXEMwyrrvBRHL-Ey4WPQpSHk3xwGtVuCJKvA9Ks--J9Pyh8i8NaGhQ6AQMIjYvABJTPq4rpBYgFseK-w1mgBi6AB8fNkZ8ZqAep67ECqAenzLECqAfx9LECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAGEi9_cE6WMbJibvn_ZcDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxbKgYKBPbysQJiFwoVY29tLmdvb2dsZS5Ob3RlYm9va0xNajAKLmNvbS5nb29nbGUuYW5kcm9pZC5hcHBzLmxhYnMubGFuZ3VhZ2UudGFpbHdpbmR4AYgBAZABAaoNAklOyA0B6g0TCMCIirvn_ZcDFbN6KgkdD_MO8vANAogOCbAO2a-7iRm4E-QD2BMMiBQB0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAAN6kOUESCjQ5NzAyMTIyMjEYAbIYCRICi1QYLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMIvYWKu-f9lwMVs3oqCR0P8w7yEAEYASAAEgJ-svD_BwE&num=1&cid=CAQSoAIAogo4dWWW6CLPioUVvr2dkyJxyq9ce-cmxcS9eXSE7gIp7knBUNxW77dPKXSMj7_YfkOCvfMJjdbp5kD0b_20LrKZ11OApCbKEva7sjUgsQAo47arGec2nW-BHFovO6Q8tPW3EvE7FHut1WrXbrSaaw7ok6Lt7yQygwwni0xF005SMoHPC4YPxbk8_3ssWeF5MGWzwWmQERDIoy25axeWq3LZyxEX-MCJXysqRrr9MO4gjaVy9xHHeVHZijINmMDNFkRYdsbO34EWf64ynkBtHNU3dcNXt4HoojdwH4-b8LwxSg5ziMigMnkduq_n289NlG2FGK7MFQcsA8VlO9_y-ltJ1BguM54TmXDbqz_i_5qo2VXZyQJvI4i7aEXZ5BsYAQ&sig=AOD64_1P6M6b4DpcGfEFnDMg4gUUCqU0Qw&rf=1&nb=9&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24032293169%26gclid%3DEAIaIQobChMIvYWKu-f9lwMVs3oqCR0P8w7yEAEYASAAEgJ-svD_BwE
              - generic [ref=f3e9]:
                - link "Presentation ready, set, go" [ref=f3e11] [cursor=pointer]:
                  - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CGNNedkTzar3yA7P1qfkPj-a7kA_hmIDligG-85LujxbXuKyvkSoQASCVlJmjAWDlgoCAuA6gAceVwb8-yAEJqAMByAPLBKoElAJP0GU-GALPuAXfd1X5TcoNmhdLFVA1ZvSiH_D1GkwKZOIA2RSrYco0LlFQVDKRlUk4ONMWV-dwHrcE63DAyAlND1k0z2j3__TCLGDpNHAIdO06V4rNOz_gqlL8TkwhspJSUPLMn1SQ_gb5-17f4pxheHO22tMnoajoVCq4h7uwt2u2Rev4eepV4hfcLCaXW-fAwpjB10fZocRtNNNTTs-idVrt1I0PKmnE1DQpmm7B6XC25pWWLAxsWwzhPGVxEpXSpw0x1MvIvqyG9UNYTjwc4WsUJcJrkKze1BmvFsKROPo5VSnwtRXEMwyrrvBRHL-Ey4WPQpSHk3xwGtVuCJKvA9Ks--J9Pyh8i8NaGhQ6AQMIjYvABJTPq4rpBYgFseK-w1mgBi6AB8fNkZ8ZqAep67ECqAenzLECqAfx9LECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAGEi9_cE6WMbJibvn_ZcDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxbKgYKBPbysQJiFwoVY29tLmdvb2dsZS5Ob3RlYm9va0xNajAKLmNvbS5nb29nbGUuYW5kcm9pZC5hcHBzLmxhYnMubGFuZ3VhZ2UudGFpbHdpbmR4AYgBAZABAaoNAklOyA0B6g0TCMCIirvn_ZcDFbN6KgkdD_MO8vANAogOCbAO2a-7iRm4E-QD2BMMiBQB0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAAN6kOUESCjQ5NzAyMTIyMjEYAbIYCRICi1QYLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMIvYWKu-f9lwMVs3oqCR0P8w7yEAEYASAAEgJ-svD_BwE&num=1&cid=CAQSoAIAogo4dWWW6CLPioUVvr2dkyJxyq9ce-cmxcS9eXSE7gIp7knBUNxW77dPKXSMj7_YfkOCvfMJjdbp5kD0b_20LrKZ11OApCbKEva7sjUgsQAo47arGec2nW-BHFovO6Q8tPW3EvE7FHut1WrXbrSaaw7ok6Lt7yQygwwni0xF005SMoHPC4YPxbk8_3ssWeF5MGWzwWmQERDIoy25axeWq3LZyxEX-MCJXysqRrr9MO4gjaVy9xHHeVHZijINmMDNFkRYdsbO34EWf64ynkBtHNU3dcNXt4HoojdwH4-b8LwxSg5ziMigMnkduq_n289NlG2FGK7MFQcsA8VlO9_y-ltJ1BguM54TmXDbqz_i_5qo2VXZyQJvI4i7aEXZ5BsYAQ&sig=AOD64_1P6M6b4DpcGfEFnDMg4gUUCqU0Qw&rf=1&nb=0&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24032293169%26gclid%3DEAIaIQobChMIvYWKu-f9lwMVs3oqCR0P8w7yEAEYASAAEgJ-svD_BwE
                - link "From messy notes to masterclass. Create your next presentation with a Slide Deck." [ref=f3e13] [cursor=pointer]:
                  - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CGNNedkTzar3yA7P1qfkPj-a7kA_hmIDligG-85LujxbXuKyvkSoQASCVlJmjAWDlgoCAuA6gAceVwb8-yAEJqAMByAPLBKoElAJP0GU-GALPuAXfd1X5TcoNmhdLFVA1ZvSiH_D1GkwKZOIA2RSrYco0LlFQVDKRlUk4ONMWV-dwHrcE63DAyAlND1k0z2j3__TCLGDpNHAIdO06V4rNOz_gqlL8TkwhspJSUPLMn1SQ_gb5-17f4pxheHO22tMnoajoVCq4h7uwt2u2Rev4eepV4hfcLCaXW-fAwpjB10fZocRtNNNTTs-idVrt1I0PKmnE1DQpmm7B6XC25pWWLAxsWwzhPGVxEpXSpw0x1MvIvqyG9UNYTjwc4WsUJcJrkKze1BmvFsKROPo5VSnwtRXEMwyrrvBRHL-Ey4WPQpSHk3xwGtVuCJKvA9Ks--J9Pyh8i8NaGhQ6AQMIjYvABJTPq4rpBYgFseK-w1mgBi6AB8fNkZ8ZqAep67ECqAenzLECqAfx9LECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAGEi9_cE6WMbJibvn_ZcDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxbKgYKBPbysQJiFwoVY29tLmdvb2dsZS5Ob3RlYm9va0xNajAKLmNvbS5nb29nbGUuYW5kcm9pZC5hcHBzLmxhYnMubGFuZ3VhZ2UudGFpbHdpbmR4AYgBAZABAaoNAklOyA0B6g0TCMCIirvn_ZcDFbN6KgkdD_MO8vANAogOCbAO2a-7iRm4E-QD2BMMiBQB0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAAN6kOUESCjQ5NzAyMTIyMjEYAbIYCRICi1QYLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMIvYWKu-f9lwMVs3oqCR0P8w7yEAEYASAAEgJ-svD_BwE&num=1&cid=CAQSoAIAogo4dWWW6CLPioUVvr2dkyJxyq9ce-cmxcS9eXSE7gIp7knBUNxW77dPKXSMj7_YfkOCvfMJjdbp5kD0b_20LrKZ11OApCbKEva7sjUgsQAo47arGec2nW-BHFovO6Q8tPW3EvE7FHut1WrXbrSaaw7ok6Lt7yQygwwni0xF005SMoHPC4YPxbk8_3ssWeF5MGWzwWmQERDIoy25axeWq3LZyxEX-MCJXysqRrr9MO4gjaVy9xHHeVHZijINmMDNFkRYdsbO34EWf64ynkBtHNU3dcNXt4HoojdwH4-b8LwxSg5ziMigMnkduq_n289NlG2FGK7MFQcsA8VlO9_y-ltJ1BguM54TmXDbqz_i_5qo2VXZyQJvI4i7aEXZ5BsYAQ&sig=AOD64_1P6M6b4DpcGfEFnDMg4gUUCqU0Qw&rf=1&nb=7&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24032293169%26gclid%3DEAIaIQobChMIvYWKu-f9lwMVs3oqCR0P8w7yEAEYASAAEgJ-svD_BwE
                  - text: From messy notes to masterclass. Create your next presentation with aSlide Deck.
            - generic [ref=f3e14]:
              - link [ref=f3e15] [cursor=pointer]:
                - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CGNNedkTzar3yA7P1qfkPj-a7kA_hmIDligG-85LujxbXuKyvkSoQASCVlJmjAWDlgoCAuA6gAceVwb8-yAEJqAMByAPLBKoElAJP0GU-GALPuAXfd1X5TcoNmhdLFVA1ZvSiH_D1GkwKZOIA2RSrYco0LlFQVDKRlUk4ONMWV-dwHrcE63DAyAlND1k0z2j3__TCLGDpNHAIdO06V4rNOz_gqlL8TkwhspJSUPLMn1SQ_gb5-17f4pxheHO22tMnoajoVCq4h7uwt2u2Rev4eepV4hfcLCaXW-fAwpjB10fZocRtNNNTTs-idVrt1I0PKmnE1DQpmm7B6XC25pWWLAxsWwzhPGVxEpXSpw0x1MvIvqyG9UNYTjwc4WsUJcJrkKze1BmvFsKROPo5VSnwtRXEMwyrrvBRHL-Ey4WPQpSHk3xwGtVuCJKvA9Ks--J9Pyh8i8NaGhQ6AQMIjYvABJTPq4rpBYgFseK-w1mgBi6AB8fNkZ8ZqAep67ECqAenzLECqAfx9LECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAGEi9_cE6WMbJibvn_ZcDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxbKgYKBPbysQJiFwoVY29tLmdvb2dsZS5Ob3RlYm9va0xNajAKLmNvbS5nb29nbGUuYW5kcm9pZC5hcHBzLmxhYnMubGFuZ3VhZ2UudGFpbHdpbmR4AYgBAZABAaoNAklOyA0B6g0TCMCIirvn_ZcDFbN6KgkdD_MO8vANAogOCbAO2a-7iRm4E-QD2BMMiBQB0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAAN6kOUESCjQ5NzAyMTIyMjEYAbIYCRICi1QYLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMIvYWKu-f9lwMVs3oqCR0P8w7yEAEYASAAEgJ-svD_BwE&num=1&cid=CAQSoAIAogo4dWWW6CLPioUVvr2dkyJxyq9ce-cmxcS9eXSE7gIp7knBUNxW77dPKXSMj7_YfkOCvfMJjdbp5kD0b_20LrKZ11OApCbKEva7sjUgsQAo47arGec2nW-BHFovO6Q8tPW3EvE7FHut1WrXbrSaaw7ok6Lt7yQygwwni0xF005SMoHPC4YPxbk8_3ssWeF5MGWzwWmQERDIoy25axeWq3LZyxEX-MCJXysqRrr9MO4gjaVy9xHHeVHZijINmMDNFkRYdsbO34EWf64ynkBtHNU3dcNXt4HoojdwH4-b8LwxSg5ziMigMnkduq_n289NlG2FGK7MFQcsA8VlO9_y-ltJ1BguM54TmXDbqz_i_5qo2VXZyQJvI4i7aEXZ5BsYAQ&sig=AOD64_1P6M6b4DpcGfEFnDMg4gUUCqU0Qw&rf=1&nb=19&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24032293169%26gclid%3DEAIaIQobChMIvYWKu-f9lwMVs3oqCR0P8w7yEAEYASAAEgJ-svD_BwE
              - link "Gemini Notebook" [ref=f3e18] [cursor=pointer]:
                - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CGNNedkTzar3yA7P1qfkPj-a7kA_hmIDligG-85LujxbXuKyvkSoQASCVlJmjAWDlgoCAuA6gAceVwb8-yAEJqAMByAPLBKoElAJP0GU-GALPuAXfd1X5TcoNmhdLFVA1ZvSiH_D1GkwKZOIA2RSrYco0LlFQVDKRlUk4ONMWV-dwHrcE63DAyAlND1k0z2j3__TCLGDpNHAIdO06V4rNOz_gqlL8TkwhspJSUPLMn1SQ_gb5-17f4pxheHO22tMnoajoVCq4h7uwt2u2Rev4eepV4hfcLCaXW-fAwpjB10fZocRtNNNTTs-idVrt1I0PKmnE1DQpmm7B6XC25pWWLAxsWwzhPGVxEpXSpw0x1MvIvqyG9UNYTjwc4WsUJcJrkKze1BmvFsKROPo5VSnwtRXEMwyrrvBRHL-Ey4WPQpSHk3xwGtVuCJKvA9Ks--J9Pyh8i8NaGhQ6AQMIjYvABJTPq4rpBYgFseK-w1mgBi6AB8fNkZ8ZqAep67ECqAenzLECqAfx9LECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAGEi9_cE6WMbJibvn_ZcDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxbKgYKBPbysQJiFwoVY29tLmdvb2dsZS5Ob3RlYm9va0xNajAKLmNvbS5nb29nbGUuYW5kcm9pZC5hcHBzLmxhYnMubGFuZ3VhZ2UudGFpbHdpbmR4AYgBAZABAaoNAklOyA0B6g0TCMCIirvn_ZcDFbN6KgkdD_MO8vANAogOCbAO2a-7iRm4E-QD2BMMiBQB0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAAN6kOUESCjQ5NzAyMTIyMjEYAbIYCRICi1QYLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMIvYWKu-f9lwMVs3oqCR0P8w7yEAEYASAAEgJ-svD_BwE&num=1&cid=CAQSoAIAogo4dWWW6CLPioUVvr2dkyJxyq9ce-cmxcS9eXSE7gIp7knBUNxW77dPKXSMj7_YfkOCvfMJjdbp5kD0b_20LrKZ11OApCbKEva7sjUgsQAo47arGec2nW-BHFovO6Q8tPW3EvE7FHut1WrXbrSaaw7ok6Lt7yQygwwni0xF005SMoHPC4YPxbk8_3ssWeF5MGWzwWmQERDIoy25axeWq3LZyxEX-MCJXysqRrr9MO4gjaVy9xHHeVHZijINmMDNFkRYdsbO34EWf64ynkBtHNU3dcNXt4HoojdwH4-b8LwxSg5ziMigMnkduq_n289NlG2FGK7MFQcsA8VlO9_y-ltJ1BguM54TmXDbqz_i_5qo2VXZyQJvI4i7aEXZ5BsYAQ&sig=AOD64_1P6M6b4DpcGfEFnDMg4gUUCqU0Qw&rf=1&nb=1&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24032293169%26gclid%3DEAIaIQobChMIvYWKu-f9lwMVs3oqCR0P8w7yEAEYASAAEgJ-svD_BwE
              - link "Learn More" [ref=f3e19] [cursor=pointer]:
                - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CGNNedkTzar3yA7P1qfkPj-a7kA_hmIDligG-85LujxbXuKyvkSoQASCVlJmjAWDlgoCAuA6gAceVwb8-yAEJqAMByAPLBKoElAJP0GU-GALPuAXfd1X5TcoNmhdLFVA1ZvSiH_D1GkwKZOIA2RSrYco0LlFQVDKRlUk4ONMWV-dwHrcE63DAyAlND1k0z2j3__TCLGDpNHAIdO06V4rNOz_gqlL8TkwhspJSUPLMn1SQ_gb5-17f4pxheHO22tMnoajoVCq4h7uwt2u2Rev4eepV4hfcLCaXW-fAwpjB10fZocRtNNNTTs-idVrt1I0PKmnE1DQpmm7B6XC25pWWLAxsWwzhPGVxEpXSpw0x1MvIvqyG9UNYTjwc4WsUJcJrkKze1BmvFsKROPo5VSnwtRXEMwyrrvBRHL-Ey4WPQpSHk3xwGtVuCJKvA9Ks--J9Pyh8i8NaGhQ6AQMIjYvABJTPq4rpBYgFseK-w1mgBi6AB8fNkZ8ZqAep67ECqAenzLECqAfx9LECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAGEi9_cE6WMbJibvn_ZcDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxbKgYKBPbysQJiFwoVY29tLmdvb2dsZS5Ob3RlYm9va0xNajAKLmNvbS5nb29nbGUuYW5kcm9pZC5hcHBzLmxhYnMubGFuZ3VhZ2UudGFpbHdpbmR4AYgBAZABAaoNAklOyA0B6g0TCMCIirvn_ZcDFbN6KgkdD_MO8vANAogOCbAO2a-7iRm4E-QD2BMMiBQB0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAAN6kOUESCjQ5NzAyMTIyMjEYAbIYCRICi1QYLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMIvYWKu-f9lwMVs3oqCR0P8w7yEAEYASAAEgJ-svD_BwE&num=1&cid=CAQSoAIAogo4dWWW6CLPioUVvr2dkyJxyq9ce-cmxcS9eXSE7gIp7knBUNxW77dPKXSMj7_YfkOCvfMJjdbp5kD0b_20LrKZ11OApCbKEva7sjUgsQAo47arGec2nW-BHFovO6Q8tPW3EvE7FHut1WrXbrSaaw7ok6Lt7yQygwwni0xF005SMoHPC4YPxbk8_3ssWeF5MGWzwWmQERDIoy25axeWq3LZyxEX-MCJXysqRrr9MO4gjaVy9xHHeVHZijINmMDNFkRYdsbO34EWf64ynkBtHNU3dcNXt4HoojdwH4-b8LwxSg5ziMigMnkduq_n289NlG2FGK7MFQcsA8VlO9_y-ltJ1BguM54TmXDbqz_i_5qo2VXZyQJvI4i7aEXZ5BsYAQ&sig=AOD64_1P6M6b4DpcGfEFnDMg4gUUCqU0Qw&rf=1&nb=8&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24032293169%26gclid%3DEAIaIQobChMIvYWKu-f9lwMVs3oqCR0P8w7yEAEYASAAEgJ-svD_BwE
          - generic [ref=f3e22] [cursor=pointer]
          - button [ref=f3e27] [cursor=pointer]
          - iframe
    - paragraph [ref=e37]:
      - text: Do you enjoy this platform? ❤️
      - link "Buy us a coffee" [ref=e38] [cursor=pointer]:
        - /url: https://www.buymeacoffee.com/expandtesting
    - generic [ref=e39]:
      - insertion [ref=e41]:
        - generic [ref=e44]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e46]: Discover more
          - link "Learn to Code" [ref=e47] [cursor=pointer]
          - link "Try Cloud Tools" [ref=e52] [cursor=pointer]
          - link "Try Dev Tools" [ref=e57] [cursor=pointer]
          - link "Source Robotics" [ref=e62] [cursor=pointer]
          - link "Prep for Tests" [ref=e67] [cursor=pointer]
          - link "Try Web Tools" [ref=e72] [cursor=pointer]
          - link "Find Study Aids" [ref=e77] [cursor=pointer]
          - link "Find Schools" [ref=e82] [cursor=pointer]
      - generic [ref=e89]:
        - navigation "breadcrumb mb-2" [ref=e90]:
          - list [ref=e91]:
            - listitem [ref=e92]:
              - link "Home" [ref=e93] [cursor=pointer]:
                - /url: /
            - listitem [ref=e94]:
              - text: /
              - link "Dynamically Loaded Page Elements" [ref=e95] [cursor=pointer]:
                - /url: /dynamic-loading
            - listitem [ref=e96]: "/ Example 2: Element rendered after the fact"
        - 'heading "Example 2: Element rendered after the fact" [level=1] [ref=e97]'
        - button "Start" [ref=e99] [cursor=pointer]
      - insertion [ref=e101]:
        - generic [ref=e104]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e106]: Discover more
          - link "Compare Browsers" [ref=e107] [cursor=pointer]
          - link "Explore Web Apps" [ref=e112] [cursor=pointer]
          - link "Get Certified" [ref=e117] [cursor=pointer]
          - link "Find Tech Jobs" [ref=e122] [cursor=pointer]
          - link "Automation practice website" [ref=e127] [cursor=pointer]
          - link "Software Testing Resources" [ref=e132] [cursor=pointer]
          - link "Automation Testing Tools" [ref=e137] [cursor=pointer]
          - link "QA Training Courses" [ref=e142] [cursor=pointer]
  - contentinfo [ref=e147]:
    - generic [ref=e152]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=e153]
      - paragraph [ref=e154]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=e155] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
        - link "Try Cloud Tools" [ref=e156] [cursor=pointer]
  - generic [ref=e160] [cursor=pointer]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { TIMEOUT } = require('node:dns');
  3  | 
  4  | test.skip('Flaky test',async({page})=>
  5  | {   
  6  |     await page.goto('https://testautomationpractice.blogspot.com/.');
  7  |     const btn= page.locator('.start');
  8  |     
  9  |     await btn.waitFor({state:'visible'});
  10 |     await btn.click();
  11 |     await page.waitForTimeout(5000);
  12 |     
  13 | 
  14 | });
  15 | 
  16 | test('Flaky test 2',async({page})=>
  17 | {   
  18 |     await page.goto('https://practice.expandtesting.com/dynamic-loading/2');
  19 |     const btn=await page.getByRole('button',{name:'start'})
> 20 |     c= page.locator('.start');
     |      ^ ReferenceError: c is not defined
  21 |     
  22 |     await btn.waitFor({state:'visible'});
  23 |     await btn.click();
  24 |     await expect(page.getByRole('h4',{name:'Hello World!'})).toBeVisible({TIMEOUT:10000});
  25 |     
  26 | 
  27 | });
```