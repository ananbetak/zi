# zi
Zoom Info

Installation Proccess :
-----------------------

1. Download the files.

2. Unzip and Go to the root direcrory : npm install

3. Go to , client directory : npm install

------------------------------------------------------------------------------------------------------------------------------------------

Running Proccess :
-------------------

1. Go to root directory and type : node server

2. Run device/emulator.

2. Go to client directory and type : npm run android

------------------------------------------------------------------------------------------------------------------------------------------

Information & Features :
------------------------

1. The search , is only available on "title" search .

2. The server can distinguish between users who are requesting data from the app/client , using unique id , so each user will get his own data ( amount of products ).

3. The search result, will give no data message in case the backend couldn't find results, else it will give back the product, meanwhile on that proccess , loading indicator is appearing until data is received back from back end. ( when props changes ).

4. on loading more data, the app will automatically scroll to those next "10" products.

5. when reaching the end of the list, a message of "End List" will appear on the app , on the bottom.

6. on the homepage, a counter is being showed.

7. if the user already seen all the list , and then try to make a search or go to a product details, and try to come back to homepage, and click on load more,
he will receive instantly the whole list.

8. the Mockdata2 file, is only a backup file .

9. Redux is handling the state for the reacts components.

10. on each Loadmore, a maximum of additional 10 items will be added if they are available.

11. Regarding realtime , what is actually done currently, the frontend ( app ) , is automatically getting the first 10 products , and on loadmore, will automatically grab the next load of addiotional products.

12. the only realtime thing that could be added to this app , is exactly how it is being done .

13 If you really meant, that realtime means, if data changes on the backend ( MockData ) , then
i had to use sockets for that, and i don't think this is what required on the task.

I Hope you enjoy the project.

Thank you

Anan Kassis
