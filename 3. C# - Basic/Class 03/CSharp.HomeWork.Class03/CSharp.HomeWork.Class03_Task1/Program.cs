using System;

//## Task 1
//Make a console application called SumOfEven. Inside it create an array of 6 integers. Get numbers from the input, find and print the sum of the even numbers from the array:
//*Test Data:
//*Enter integer no.1:
//    *4
//  * Enter integer no.1:
//    *3
//  * Enter integer no.1:
//    *7
//  * Enter integer no.1:
//    *3
//  * Enter integer no.1:
//    *2
//  * Enter integer no.1:
//    *8
//* Expected Output:
//*The result is: 14




namespace CSharp.HomeWork.Class03_Task1
{
    class Program
    {
        static void Main(string[] args)
        {
            string userInput;
            int intParse;

            //int[] arrayOfIntegers = new int[6];  - obid za Array no ne uspejav da gi vmetnam userInput vo nizata  

            Console.WriteLine("Enter integer no.1: ");
            userInput = Console.ReadLine();
            intParse = int.Parse(userInput);
            Console.WriteLine("You entered {0}", userInput);

            Console.WriteLine("\n \n Enter integer no.2: ");
            userInput = Console.ReadLine();
            intParse = int.Parse(userInput);
            Console.WriteLine("You entered {0}", userInput);

            Console.WriteLine("\n \n Enter integer no.3: ");
            userInput = Console.ReadLine();
            intParse = int.Parse(userInput);
            Console.WriteLine("You entered {0}", userInput);

            Console.WriteLine("\n \n Enter integer no.4: ");
            userInput = Console.ReadLine();
            intParse = int.Parse(userInput);
            Console.WriteLine("You entered {0}", userInput);

            Console.WriteLine("\n \n Enter integer no.5: ");
            userInput = Console.ReadLine();
            intParse = int.Parse(userInput);
            Console.WriteLine("You entered {0}", userInput);

            Console.WriteLine("\n \n Enter integer no.6: ");
            userInput = Console.ReadLine();
            intParse = int.Parse(userInput);
            Console.WriteLine("You entered {0}", userInput);
            Console.WriteLine();



            
            int totalEven = 0;
            for (int i = 1; i <= intParse; i++)
            {
                if (i % 2 == 0)
                {
                    Console.WriteLine(" Even number : {0} ", i);
                    totalEven = totalEven + i;   
                }
                #region  Odd Numbers - za proba
                //else
                //{
                //    Console.WriteLine(" \t \t Odd number: {0}", i);
                //}
                #endregion
            }
            Console.WriteLine(" \n The reslt of Even Numbers is: {0}", totalEven);


            Console.ReadLine();
        }
    }
}
