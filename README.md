# CountrySearchApp
A Simple React api that will return a list of countries whose official name has a search key word to it .e.g

A list of all available countries is found in the API call. 
GET https://restcountries.com/v3.1/all
[
{
    "name": {
        "common": "South Africa",
        "official": "Republic of South Africa"
        }
},
{
    "name": {
            "common": "Philippines",
            "official": "Republic of the Philippines"
}.
...
]

You appliction is expected to consume this list and use it to compute its searches.
 
1. Search a country by common names

GET api/search?name=Philippines

{"name": "Republic of the Philippines", "common": "Philippines"}

