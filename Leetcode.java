/**
VI -> 4
IX -> 9
XL

 */
public class Soluction{
  public String longgestCommonPrefix(String []strs){
    if (strs==null || strs.length ==0){
      return "";
    }
    int index = 0;
    int minLength = Integer.MAX_VALUE;
    for (String item : strs){
      minLength = Math.min(minLength,item.length());
    }
    for (int i=0;i<minLength;i++){
      char c = strs[0].charAt(i);
      for (int j = 1;j<strs.length;j++){
        if(strs[j].charAt(i)!=c){
          return strs[0].subString(0,i);
        }
      }
    }
    return strs[0];

  }

  public String commonPrefix(String str1,String str2){
    int index = 0;
    int minLength = Math.min(str1.length(),str2.length());
    while (index <minLength && str1.charAt(index)==str2.charAt(index)){
      index++;
    }
    return str1.subString(0,index);
  }
}
