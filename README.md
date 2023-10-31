# Aggregatron
###### ah • greg • ate • tron
A centralised content aggregation server for creators
```
 $$$$$$\                                                               $$\                                   
$$  __$$\                                                              $$ |                                  
$$ /  $$ | $$$$$$\   $$$$$$\   $$$$$$\   $$$$$$\   $$$$$$\   $$$$$$\ $$$$$$\    $$$$$$\   $$$$$$\  $$$$$$$\  
$$$$$$$$ |$$  __$$\ $$  __$$\ $$  __$$\ $$  __$$\ $$  __$$\  \____$$\\_$$  _|  $$  __$$\ $$  __$$\ $$  __$$\ 
$$  __$$ |$$ /  $$ |$$ /  $$ |$$ |  \__|$$$$$$$$ |$$ /  $$ | $$$$$$$ | $$ |    $$ |  \__|$$ /  $$ |$$ |  $$ |
$$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |      $$   ____|$$ |  $$ |$$  __$$ | $$ |$$\ $$ |      $$ |  $$ |$$ |  $$ |
$$ |  $$ |\$$$$$$$ |\$$$$$$$ |$$ |      \$$$$$$$\ \$$$$$$$ |\$$$$$$$ | \$$$$  |$$ |      \$$$$$$  |$$ |  $$ |
\__|  \__| \____$$ | \____$$ |\__|       \_______| \____$$ | \_______|  \____/ \__|       \______/ \__|  \__|
          $$\   $$ |$$\   $$ |                    $$\   $$ |                                                 
          \$$$$$$  |\$$$$$$  |                    \$$$$$$  |                                                 
           \______/  \______/                      \______/                                                                                                                                                                                
                                                                                                                              
```

### About Aggregatron
Aggregatron is a self-hosted centralised content aggregation server for creators and anyone else who publishes content in multiple places online. It consists of three parts:
- Aggregation service [WIP - Not yet implemented]
  - Automatically collects data from the creator's platforms (i.e. YouTube, personal blog, etc.).
- Database
  - Stores details about what the creator has published to be accessed by the API.
- API
  - Allows items stored in the database to be accessed so they can be published (i.e. on a website, via a Discord bot, etc.)
 
### API Documentation
API queries should be sent to the following endpoints:

#### `/recent`
**Options:**

- `numberToRetrieve` [Integer] - The number of recent activities to retrieve.
- `service` [String] (optional) - If included, only activites from a specific service (i.e. YouTube) will be included in the response

#### `/paginated`
**Options:**

- `numberToRetrieve` [Integer] - The number of activities to retrieve.
- `beforeDate` [String (Date)] - The time before which to search for activities. This can be any string that is recognised by a JavaScript `Date` object.
- `service` [String] (optional) - If included, only activites from a specific service (i.e. YouTube) will be searched.

#### Response
The response for both endpoints will be an array of Activity objects:
- `id` [Integer] The sequential database ID of the activity.
- `published_date` [String] The timestamp the Activity was originally published in ISO 8601 format.
- `thumbnail` [Object (Buffer)] The thumbnail image. This usually should be converted into a base64 data URI if displaying on a web page.
- `title` [String] The title of the Activity.
- `url` [String] The URL linking to the original published source of the Activity.
