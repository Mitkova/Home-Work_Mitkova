using System;

namespace SumOfEven
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] array = new int[6];
            int sum = 0;
            for (int i = 1; i <= 6; i++)
            {
                Console.WriteLine($"Enter integer {i} number :  ");
                string userInput = Console.ReadLine();
                bool isValidNumber = int.TryParse(userInput, out int number);
                if (isValidNumber)
                {
                    //Console.WriteLine($"The {i} inserted number is {number}");
                    array[i - 1] = number;
                    if(number % 2 == 0)
                    {
                        //sum += number; - Linija 22 i Linija 23 isti kod
                        sum = number + i;
                    }
                    continue;
                }
                else
                {
                    Console.WriteLine($"The {i}nd inserted input could not be converted into a number. "+
                        $"\n 0 will be taken as a value");
                }
            }
            Console.WriteLine($"The sum of Even Numbers is: {sum}");

            Console.ReadLine();
        }
    }
}
