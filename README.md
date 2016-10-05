# Express Routing Challenge - 01

This challenge involved creating a list of songs and artists, which are appended to the page using GET and POST requests.  

## Features

#### Feature One

When a new song is added, the title and artist are passed through a function to check if BOTH the title and artist match another song in the list.  If both match another song, the song is not added to the list.  The function converts both items to lower-case, so there are no errors if the same song and artist are duplicated in differing cases.  If a duplicate song is entered, it will trigger an error with HTTP code 400.

#### Feature Two

When the song is added, the date of creation is added as a property to the song object.  It is converted to a string to improve the format, and is appended to the page along with the title and artist.

### Author

- Barrett Amsrud
- 10/5/16
