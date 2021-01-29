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

13. 
A) alert(student.name);

B) alert(student["Grad Year"]);

C) student.function();

D) alert(student["Favorite Teacher"].name);

E) alert(student.courseLoad[0]); /* Not sure */

14.
A) '32' because since '3' is a string and there's a plus sign after, it concatenates the remaining parts as a string

B) 1 because the subtract sign indicates to JS that they are integers

C) 3 because there is an integer before, and the null adds nothing to an integer

D) '3null' because the first thing is a string, so everything else after is interpretated as a string

E) 4 because when there's a + with an integer involved, everything else is interpretated as an integer so true is taken as a 1

F) 0 because both false and null have no value

G) '3undefined' because there's a string and a +

H) NaN because this doesn't follow any of the subtraction rules listed above

15.
A) True, because there's an int involved so everything is evaluated as an int

B) False, because the ASCII value of '2' is greater than '12'

C) True, because == just checks if if their value is equal

D) False, because === checks for equal value and type and int and string are not the same

E) False, because their values aren't equal either

F) True, because Boolean(2) evaluates to true, which is the same type 

16. == checks for equality in value while === checks for equality in value and type

17. "How are you?" gets printed because 2 is a positive integer /* Not sure*/

19. The result is the array with values [6, 8, 10] because within modifyArray first the doSomething function occurs, then the callback function where x * 2 occurs happens after. 

21. 
1

4

3

2
