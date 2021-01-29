1. At line 11, it will log i because i is instantiated as a function variable using var
2. At line 12, it will log discountedPrice because discountedPrice is instantiated as a function variable using var
3. At line 13, it will log the value of finalPrice because finalPrice is declared to be accessible anywhere in the function
4. It will return [50, 100, 150] because the for loop essentially finds the new prices after applying the discount, which occurs on the first line in the for loop. Then, it accounts for rounding with the second line, and pushes it into the discounted array.

5. At line 11, it will log an error because i is instantiated using let, which allows it to be used only within the for loop
6. At line 12, it will log an error because discountedPrice is instantiated using let, which allows it to be used only within the for loop
7. At line 13, it will log finalPrice because it was instantiated outside the for loop as a function variable, so it's accessible anywhere in the function
8. It will return [50, 100, 150] because the for loop essentially finds the new prices after applying the discount, which occurs on the first line in the for loop. Then, it accounts for rounding with the second line, and pushes it into the discounted array.

9. At line 11, it will log an error because i is instantiated using let, which allows it to be used only within the for loop
10. At line 12, it will log an error because discountedPrice is instantiated using const, which allows it to be used only within the for loop as it holds the same properties as let but isn't able to be redefined
11. At line 13, it will log finalPrice because it was instantiated outside the for loop as a function variable, so it's accessible anywhere in the function
12. It will return [50, 100, 150] because the for loop essentially finds the new prices after applying the discount, which occurs on the first line in the for loop. Then, it accounts for rounding with the second line, and pushes it into the discounted array.

