
# Get Your Swagger On Chrome Extension  
Author: Craig Monroe  
Team: RMA.Everest  
Date: 2018-12-30  
  
 After moving into AWS it was a continual time waste to visit the Eureka page for the region only to have to then do a find on the services you want, then once you click on those available server links, you have to change the route to swagger-ui.html. After doing the hundreds of time I decided to figure out how to write a chrome extension to resolve all of these extra workflow steps. This was my first hand at Javascript so it could be certainly be more clean but the goal was to get the basic functionality out to teams for use.   
   
 To Use:  
 1. Load the extension  
 2. Navigate to one of the three (Live, Integration, DevQa) environments for Eureka 
 3. Click on the Chrome extension icon 
 4. Enter the domain and/or market to filter on
 5. Click the save button
 6. Reload the Eureka tab
 7. Voilà the page will load only the instances for your selected domain/market
 8. The routes have been changed from /info to /swagger-ui.html 


- Enhancing the output for more separation.  
- Please email me at <a href="mailto:cmonroe@ebsco.com">cmonroe@ebsco.com</a> with any suggestions.