export class Utils {
    public static readonly GlobalPageSize: number = 50;
    public static readonly itemPerpage: number = 5;
    public static readonly StoryBlockPerpage: number = 6;
 
 
    public static omit_special_char(event: any) {
       var k;
       k = event.charCode;  //         k = event.keyCode;  (Both can be used)
       if (k == 45 || k == 46 || k == 95) {
          return;
       }
       return ((k > 63 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
    }
    public static validateEmail(str: string): boolean {
 
       if (new RegExp('^[A-Za-z0-9._-]+@[a-z0-9.-]+\\.[a-z]{2,4}$').test(str)) {
          return true;
       }
 
       return false;
    };
 
    public static disableButton(event: any, message: string): string {
       event.target.disabled = true;
       return message;
    }
    public static enableButton(event: any, message: string): string {
       event.target.disabled = false;
       return message;
    }
    public static GetCurrentDate(): any {
       var date = new Date();
       var day = date.getDate();
       var month = date.getMonth() + 1;
       var year = date.getFullYear();
       var today = year + "-" + month + "-" + day;
       return today;
    }
    public static GetDateOnly(DateWithTime: any): any {
       var tempVar = DateWithTime.split('T');
       var correctDate;
       correctDate = tempVar[0];
       return correctDate;
    }
 
   
 
 
 }