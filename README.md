
### 1) What is the difference between null and undefined?
      undefined মানে হলো কোনো ভেরিয়েবল ডিক্লেয়ার করা হয়েছে কিন্তু তাকে এখনো কোনো মান দেওয়া হয়নি। অন্যদিকে null হলো ইচ্ছাকৃতভাবে মান না দেওয়া।
      
### 2) What is the use of the map() function in JavaScript? How is it different from forEach()?
      map() একটি নতুন array তৈরি করে যেখানে আগের array-এর প্রতিটি উপাদানের উপর নির্দিষ্ট কাজে প্রয়োগ করা হয়।
      অন্যদিকে forEach() শুধু প্রতিটি উপাদানের উপর কাজ করে, কিন্তু নতুন কোনো array রিটার্ন করে না।
      
### 3) What is the difference between == and ===?
      ==  শুধু মান (value) তুলনা করে এবং টাইপ কনভার্ট করে নেয়
      === এটি মান এবং টাইপ দুটোই যাচাই করে।
      
### 4) What is the significance of async/await in fetching API data?
      JavaScript এ API call সাধারণত asynchronous হয়। মানে ডাটা আসতে সময় লাগে।
      async/await ব্যবহার করলে আমরা asynchronous কোডকে synchronous-এর মতো সহজভাবে লিখতে পারি। এতে কোড পড়া ও বোঝা সহজ হয়।

### 5) Explain the concept of Scope in JavaScript (Global, Function, Block). 

      Scope মানে হলো কোনো ভেরিয়েবল কোথায় অ্যাক্সেস করা যাবে।
      
      Global Scope: যে ভেরিয়েবল ফাংশনের বাইরে ডিক্লেয়ার করা হয়, তা পুরো প্রোগ্রামে ব্যবহার করা যায়।
      Function Scope:ফাংশনের ভেতরে ডিক্লেয়ার করা ভেরিয়েবল শুধু সেই ফাংশনের ভিতরেই ব্যবহার করা যায়।
      Block Scope:let এবং const দিয়ে ডিক্লেয়ার করা ভেরিয়েবল {} ব্লকের ভিতরে থাকে।
