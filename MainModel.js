/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('TreeHierarchy.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    requires: [
        
        'Ext.data.TreeStore'
    ],

    alias: 'viewmodel.salary',

    stores: {
        store: {
            type: 'tree',
            
          
            data: [
      {
          "state": "Alabama",
          "industry_type": "Agriculture",
          "industry": "",
          "salary": 34987.4879,
          "count": 207,
          "rank": 0
      },
        {
          "state": "Alabama",
            "industry_type": "Agriculture",
            "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
            "salary": 48404.3478,
            "count": 23,
            "rank": 1
        },
    {
          "state": "Alabama",
        "industry_type": "Agriculture",
        "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
        "salary": 43254.6939,
        "count": 49,
        "rank": 2
    },
{
          "state": "Alabama",
    "industry_type": "Agriculture",
    "industry": "LOGGING",
    "salary": 31701.6667,
    "count": 48,
    "rank": 3
},
      {
          "state": "Alabama",
          "industry_type": "Agriculture",
          "industry": "CROP PRODUCTION",
          "salary": 24882.8767,
          "count": 73,
          "rank": 4
      },
      {
          "state": "Alabama",
          "industry_type": "Construction",
          "industry": "",
          "salary": 38732.1838,
          "count": 1099,
          "rank": 0
      },
      {
          "state": "Alabama",
          "industry_type": "Construction",
          "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
          "salary": 38732.1838,
          "count": 1099,
          "rank": 1
      },
      {
          "state": "Alabama",
          "industry_type": "Educational Services",
          "industry": "",
          "salary": 35730.2711,
          "count": 2176,
          "rank": 0
      },
      {
          "state": "Alabama",
          "industry_type": "Educational Services",
          "industry": "BUSINESS, TECHNICAL, AND TRADE SCHOOLS AND TRAINING",
          "salary": 60666.6667,
          "count": 15,
          "rank": 1
      },
      {
          "state": "Alabama",
          "industry_type": "Educational Services",
          "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
          "salary": 40484.273,
          "count": 674,
          "rank": 2
      },
      {
          "state": "Alabama",
          "industry_type": "Educational Services",
          "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
          "salary": 33912.9718,
          "count": 1420,
          "rank": 3
      },
      {
          "state": "Alabama",
          "industry_type": "Educational Services",
          "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
          "salary": 20839.5522,
          "count": 67,
          "rank": 4
      },
      {
          "state": "Alabama",
          "industry_type": "Entertainment",
          "industry": "",
          "salary": 13851.3489,
          "count": 1757,
          "rank": 0
      },
      {
          "state": "Alabama",
          "industry_type": "Entertainment",
          "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
          "salary": 28304.2857,
          "count": 49,
          "rank": 1
      },
      {
          "state": "Alabama",
          "industry_type": "Entertainment",
          "industry": "DRINKING PLACES, ALCOHOLIC BEVERAGES",
          "salary": 19961.5385,
          "count": 13,
          "rank": 2
      },
      {
          "state": "Alabama",
          "industry_type": "Entertainment",
          "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
          "salary": 18705.5556,
          "count": 36,
          "rank": 3
      },
      {
          "state": "Alabama",
          "industry_type": "Entertainment",
          "industry": "TRAVELER ACCOMMODATION",
          "salary": 16921.92,
          "count": 125,
          "rank": 4
      },
      {
          "state": "Alabama",
          "industry_type": "Entertainment",
          "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
          "salary": 13711.0112,
          "count": 178,
          "rank": 5
      },
      {
          "state": "Alabama",
          "industry_type": "Finance",
          "industry": "",
          "salary": 51469.3998,
          "count": 1093,
          "rank": 0
      },
      {
          "state": "Alabama",
          "industry_type": "Finance",
          "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
          "salary": 105107.5,
          "count": 64,
          "rank": 1
      },
      {
          "state": "Alabama",
          "industry_type": "Finance",
          "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
          "salary": 57591.5254,
          "count": 295,
          "rank": 2
      },
      {
          "state": "Alabama",
          "industry_type": "Finance",
          "industry": "BANKING AND RELATED ACTIVITIES",
          "salary": 50660.423,
          "count": 331,
          "rank": 3
      },
      {
          "state": "Alabama",
          "industry_type": "Finance",
          "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
          "salary": 47515.0538,
          "count": 93,
          "rank": 4
      },
      {
          "state": "Alabama",
          "industry_type": "Finance",
          "industry": "COMMERCIAL, INDUSTRIAL, AND OTHER INTANGIBLE ASSETS RENTAL AND LEASING",
          "salary": 40852.381,
          "count": 21,
          "rank": 5
      },
      {
          "state": "Alabama",
          "industry_type": "Health Care",
          "industry": "",
          "salary": 44540.3387,
          "count": 2421,
          "rank": 0
      },
      {
          "state": "Alabama",
          "industry_type": "Health Care",
          "industry": "OFFICES OF PHYSICIANS",
          "salary": 59330.3636,
          "count": 330,
          "rank": 1
      },
      {
          "state": "Alabama",
          "industry_type": "Health Care",
          "industry": "OFFICES OF OPTOMETRISTS",
          "salary": 52009.0909,
          "count": 22,
          "rank": 2
      },
      {
          "state": "Alabama",
          "industry_type": "Health Care",
          "industry": "OUTPATIENT CARE CENTERS",
          "salary": 49539.0863,
          "count": 197,
          "rank": 3
      },
      {
          "state": "Alabama",
          "industry_type": "Health Care",
          "industry": "HOSPITALS",
          "salary": 48085.2046,
          "count": 1051,
          "rank": 4
      },
      {
          "state": "Alabama",
          "industry_type": "Health Care",
          "industry": "OTHER HEALTH CARE SERVICES",
          "salary": 47529.0741,
          "count": 108,
          "rank": 5
      },
      {
          "state": "Alabama",
          "industry_type": "Information",
          "industry": "",
          "salary": 47974.9143,
          "count": 350,
          "rank": 0
      },
      {
          "state": "Alabama",
          "industry_type": "Information",
          "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
          "salary": 62621.9048,
          "count": 105,
          "rank": 1
      },
      {
          "state": "Alabama",
          "industry_type": "Information",
          "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
          "salary": 61459.2593,
          "count": 27,
          "rank": 2
      },
      {
          "state": "Alabama",
          "industry_type": "Information",
          "industry": "PERIODICAL, BOOK, AND DIRECTORY PUBLISHERS",
          "salary": 50385.1852,
          "count": 27,
          "rank": 3
      },
      {
          "state": "Alabama",
          "industry_type": "Information",
          "industry": "BROADCASTING, EXCEPT INTERNET",
          "salary": 39078.5714,
          "count": 70,
          "rank": 4
      },
      {
          "state": "Alabama",
          "industry_type": "Information",
          "industry": "NEWSPAPER PUBLISHERS",
          "salary": 33434.6939,
          "count": 49,
          "rank": 5
      },
      {
          "state": "Alabama",
          "industry_type": "Manufacturing",
          "industry": "",
          "salary": 44327.5767,
          "count": 3024,
          "rank": 0
      },
      {
          "state": "Alabama",
          "industry_type": "Manufacturing",
          "industry": "COMPUTER AND PERIPHERAL EQUIPMENT",
          "salary": 128827.2727,
          "count": 11,
          "rank": 1
      },
      {
          "state": "Alabama",
          "industry_type": "Manufacturing",
          "industry": "AEROSPACE PRODUCTS AND PARTS",
          "salary": 86967.1642,
          "count": 67,
          "rank": 2
      },
      {
          "state": "Alabama",
          "industry_type": "Manufacturing",
          "industry": "INDUSTRIAL AND MISCELLANEOUS CHEMICALS",
          "salary": 69243.7634,
          "count": 93,
          "rank": 3
      },
      {
          "state": "Alabama",
          "industry_type": "Manufacturing",
          "industry": "ALUMINUM PRODUCTION AND PROCESSING",
          "salary": 69033.3333,
          "count": 24,
          "rank": 4
      },
      {
          "state": "Alabama",
          "industry_type": "Manufacturing",
          "industry": "PULP, PAPER, AND PAPERBOARD MILLS",
          "salary": 66999.9074,
          "count": 108,
          "rank": 5
      },
      {
          "state": "Alabama",
          "industry_type": "Military",
          "industry": "",
          "salary": 55640.1575,
          "count": 127,
          "rank": 0
      },
      {
          "state": "Alabama",
          "industry_type": "Military",
          "industry": "U.S. ARMY",
          "salary": 60465.1515,
          "count": 66,
          "rank": 1
      },
      {
          "state": "Alabama",
          "industry_type": "Military",
          "industry": "U.S. AIR FORCE",
          "salary": 48264.2857,
          "count": 42,
          "rank": 2
      },
      {
          "state": "Alabama",
          "industry_type": "Mining",
          "industry": "",
          "salary": 80715.0382,
          "count": 131,
          "rank": 0
      },
        {
            "state": "Alabama",
            "industry_type": "Mining",
            "industry": "SUPPORT ACTIVITIES FOR MINING",
            "salary": 92491.0811,
            "count": 37,
            "rank": 1
        },
  {
      "state": "Alabama",
      "industry_type": "Mining",
      "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
      "salary": 76996,
      "count": 25,
      "rank": 2
  },
  {
      "state": "Alabama",
      "industry_type": "Mining",
      "industry": "COAL MINING",
      "salary": 76308.4746,
      "count": 59,
      "rank": 3
  },
  {
      "state": "Alabama",
      "industry_type": "Professional Services",
      "industry": "",
      "salary": 46656.0103,
      "count": 1751,
      "rank": 0
  },
  {
      "state": "Alabama",
      "industry_type": "Professional Services",
      "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
      "salary": 76948.2253,
      "count": 293,
      "rank": 1
  },
  {
      "state": "Alabama",
      "industry_type": "Professional Services",
      "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
      "salary": 70989.2857,
      "count": 56,
      "rank": 2
  },
  {
      "state": "Alabama",
      "industry_type": "Professional Services",
      "industry": "LEGAL SERVICES",
      "salary": 70308.9689,
      "count": 161,
      "rank": 3
  },
  {
      "state": "Alabama",
      "industry_type": "Professional Services",
      "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
      "salary": 65890.4762,
      "count": 168,
      "rank": 4
  },
  {
      "state": "Alabama",
      "industry_type": "Professional Services",
      "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
      "salary": 60934.8515,
      "count": 101,
      "rank": 5
  },
  {
      "state": "Alabama",
      "industry_type": "Public Administration",
      "industry": "",
      "salary": 49296.2984,
      "count": 1213,
      "rank": 0
  },
  {
      "state": "Alabama",
      "industry_type": "Public Administration",
      "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
      "salary": 68552.9259,
      "count": 270,
      "rank": 1
  },
  {
      "state": "Alabama",
      "industry_type": "Public Administration",
      "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
      "salary": 58804.7107,
      "count": 121,
      "rank": 2
  },
  {
      "state": "Alabama",
      "industry_type": "Public Administration",
      "industry": "PUBLIC FINANCE ACTIVITIES",
      "salary": 50001.5217,
      "count": 46,
      "rank": 3
  },
  {
      "state": "Alabama",
      "industry_type": "Public Administration",
      "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
      "salary": 46042.8571,
      "count": 21,
      "rank": 4
  },
  {
      "state": "Alabama",
      "industry_type": "Public Administration",
      "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
      "salary": 44575.4878,
      "count": 164,
      "rank": 5
  },
  {
      "state": "Alabama",
      "industry_type": "Retail Trade",
      "industry": "",
      "salary": 24735.3637,
      "count": 2543,
      "rank": 0
  },
  {
      "state": "Alabama",
      "industry_type": "Retail Trade",
      "industry": "OTHER MOTOR VEHICLE DEALERS",
      "salary": 46203.0435,
      "count": 23,
      "rank": 1
  },
  {
      "state": "Alabama",
      "industry_type": "Retail Trade",
      "industry": "AUTOMOBILE DEALERS",
      "salary": 44638.6702,
      "count": 188,
      "rank": 2
  },
  {
      "state": "Alabama",
      "industry_type": "Retail Trade",
      "industry": "ELECTRONICS STORES",
      "salary": 44364.1509,
      "count": 53,
      "rank": 3
  },
  {
      "state": "Alabama",
      "industry_type": "Retail Trade",
      "industry": "PHARMACIES AND DRUG STORES",
      "salary": 43200,
      "count": 164,
      "rank": 4
  }, {
      "state": "Alabama",
      "industry_type": "Retail Trade",
      "industry": "OFFICE SUPPLIES AND STATIONERY STORES",
      "salary": 34904,
      "count": 25,
      "rank": 5
  },
  {
      "state": "Alabama",
      "industry_type": "Services",
      "industry": "",
      "salary": 25334.265,
      "count": 898,
      "rank": 0
  },
  {
      "state": "Alabama",
      "industry_type": "Services",
      "industry": "ELECTRONIC AND PRECISION EQUIPMENT REPAIR AND MAINTENANCE",
      "salary": 41017.6471,
      "count": 17,
      "rank": 1
  },
  {
      "state": "Alabama",
      "industry_type": "Services",
      "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
      "salary": 38356.25,
      "count": 48,
      "rank": 2
  },
  {
      "state": "Alabama",
      "industry_type": "Services",
      "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
      "salary": 34673.6196,
      "count": 163,
      "rank": 3
  },
  {
      "state": "Alabama",
      "industry_type": "Services",
      "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
      "salary": 29792.3077,
      "count": 65,
      "rank": 4
  },
  {
      "state": "Alabama",
      "industry_type": "Services",
      "industry": "FUNERAL HOMES, CEMETERIES AND CREMATORIES",
      "salary": 28505.7143,
      "count": 35,
      "rank": 5
  },
  {
      "state": "Alabama",
      "industry_type": "Social Assistance",
      "industry": "",
      "salary": 18312.6844,
      "count": 339,
      "rank": 0
  },
  {
      "state": "Alabama",
      "industry_type": "Social Assistance",
      "industry": "VOCATIONAL REHABILITATION SERVICES",
      "salary": 31750.5556,
      "count": 18,
      "rank": 1
  },
  {
      "state": "Alabama",
      "industry_type": "Social Assistance",
      "industry": "INDIVIDUAL AND FAMILY SERVICES",
      "salary": 24892.0175,
      "count": 114,
      "rank": 2
  },
  {
      "state": "Alabama",
      "industry_type": "Social Assistance",
      "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
      "salary": 21430.7692,
      "count": 13,
      "rank": 3
  },
  {
      "state": "Alabama",
      "industry_type": "Social Assistance",
      "industry": "CHILD DAY CARE SERVICES",
      "salary": 12990.7216,
      "count": 194,
      "rank": 4
  },
  {
      "state": "Alabama",
      "industry_type": "Transportation",
      "industry": "",
      "salary": 44570.1857,
      "count": 754,
      "rank": 0
  },
  {
      "state": "Alabama",
      "industry_type": "Transportation",
      "industry": "RAIL TRANSPORTATION",
      "salary": 63397.6744,
      "count": 43,
      "rank": 1
  },
  {
      "state": "Alabama",
      "industry_type": "Transportation",
      "industry": "WATER TRANSPORTATION",
      "salary": 53000,
      "count": 11,
      "rank": 2
  },
  {
      "state": "Alabama",
      "industry_type": "Transportation",
      "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
      "salary": 50069.9187,
      "count": 123,
      "rank": 3
  },
  {
      "state": "Alabama",
      "industry_type": "Transportation",
      "industry": "AIR TRANSPORTATION",
      "salary": 48088.0952,
      "count": 42,
      "rank": 4
  },
  {
      "state": "Alabama",
      "industry_type": "Transportation",
      "industry": "POSTAL SERVICE",
      "salary": 47542.4528,
      "count": 106,
      "rank": 5
  },
  {
      "state": "Alabama",
      "industry_type": "Utilities",
      "industry": "",
      "salary": 62696.7655,
      "count": 371,
      "rank": 0
  },
  {
      "state": "Alabama",
      "industry_type": "Utilities",
      "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
      "salary": 73636.1702,
      "count": 235,
      "rank": 1
  },
  {
      "state": "Alabama",
      "industry_type": "Utilities",
      "industry": "ELECTRIC AND GAS, AND OTHER COMBINATIONS",
      "salary": 60900,
      "count": 17,
      "rank": 2
  },
  {
      "state": "Alabama",
      "industry_type": "Utilities",
      "industry": "NATURAL GAS DISTRIBUTION",
      "salary": 53132,
      "count": 25,
      "rank": 3
  },
  {
      "state": "Alabama",
      "industry_type": "Utilities",
      "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
      "salary": 37983.5821,
      "count": 67,
      "rank": 4
  },
  {
      "state": "Alabama",
      "industry_type": "Utilities",
      "industry": "SEWAGE TREATMENT FACILITIES",
      "salary": 37592,
      "count": 25,
      "rank": 5
  },
  {
      "state": "Alabama",
      "industry_type": "Wholesale Trade",
      "industry": "",
      "salary": 48605.1546,
      "count": 485,
      "rank": 0
  },
  {
      "state": "Alabama",
      "industry_type": "Wholesale Trade",
      "industry": "HARDWARE, AND PLUMBING AND HEATING EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
      "salary": 86204,
      "count": 25,
      "rank": 1
  },
  {
      "state": "Alabama",
      "industry_type": "Wholesale Trade",
      "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
      "salary": 73722.5806,
      "count": 31,
      "rank": 2
  },
  {
      "state": "Alabama",
      "industry_type": "Wholesale Trade",
      "industry": "METALS AND MINERALS, EXCEPT PETROLEUM, MERCHANT WHOLESALERS",
      "salary": 59800,
      "count": 13,
      "rank": 3
  },
  {
      "state": "Alabama",
      "industry_type": "Wholesale Trade",
      "industry": "PETROLEUM AND PETROLEUM PRODUCTS MERCHANT WHOLESALERS",
      "salary": 59413.3333,
      "count": 15,
      "rank": 4
  },
  {
      "state": "Alabama",
      "industry_type": "Wholesale Trade",
      "industry": "MISCELLANEOUS DURABLE GOODS MERCHANT WHOLESALERS",
      "salary": 51470.5882,
      "count": 17,
      "rank": 5
  },
  {
      "state": "Alaska",
      "industry_type": "Agriculture",
      "industry": "",
      "salary": 33114.0351,
      "count": 114,
      "rank": 0
  },
  {
      "state": "Alaska",
      "industry_type": "Agriculture",
      "industry": "FORESTRY EXCEPT LOGGING",
      "salary": 59872.7273,
      "count": 11,
      "rank": 1
  },
  {
      "state": "Alaska",
      "industry_type": "Agriculture",
      "industry": "FISHING, HUNTING AND TRAPPING",
      "salary": 31464.7059,
      "count": 85,
      "rank": 2
  },
  {
      "state": "Alaska",
      "industry_type": "Construction",
      "industry": "",
      "salary": 44394.8921,
      "count": 278,
      "rank": 0
  },
  {
      "state": "Alaska",
      "industry_type": "Construction",
      "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
      "salary": 44394.8921,
      "count": 278,
      "rank": 1
  },
  {
      "state": "Alaska",
      "industry_type": "Educational Services",
      "industry": "",
      "salary": 36631.1869,
      "count": 337,
      "rank": 0
  },
  {
      "state": "Alaska",
      "industry_type": "Educational Services",
      "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
      "salary": 37909.0909,
      "count": 33,
      "rank": 1
  },
  {
      "state": "Alaska",
      "industry_type": "Educational Services",
      "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
      "salary": 36783.5395,
      "count": 291,
      "rank": 2
  }, {
      "state": "Alabama",
      "industry_type": "Retail Trade",
      "industry": "OFFICE SUPPLIES AND STATIONERY STORES",
      "salary": 34904,
      "count": 25,
      "rank": 5
  },
  {
      "state": "Alabama",
      "industry_type": "Services",
      "industry": "",
      "salary": 25334.265,
      "count": 898,
      "rank": 0
  },
  {
      "state": "Alabama",
      "industry_type": "Services",
      "industry": "ELECTRONIC AND PRECISION EQUIPMENT REPAIR AND MAINTENANCE",
      "salary": 41017.6471,
      "count": 17,
      "rank": 1
  },
  {
      "state": "Alabama",
      "industry_type": "Services",
      "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
      "salary": 38356.25,
      "count": 48,
      "rank": 2
  },
  {
      "state": "Alabama",
      "industry_type": "Services",
      "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
      "salary": 34673.6196,
      "count": 163,
      "rank": 3
  },
  {
      "state": "Alabama",
      "industry_type": "Services",
      "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
      "salary": 29792.3077,
      "count": 65,
      "rank": 4
  },
  {
      "state": "Alabama",
      "industry_type": "Services",
      "industry": "FUNERAL HOMES, CEMETERIES AND CREMATORIES",
      "salary": 28505.7143,
      "count": 35,
      "rank": 5
  },
  {
      "state": "Alabama",
      "industry_type": "Social Assistance",
      "industry": "",
      "salary": 18312.6844,
      "count": 339,
      "rank": 0
  },
  {
      "state": "Alabama",
      "industry_type": "Social Assistance",
      "industry": "VOCATIONAL REHABILITATION SERVICES",
      "salary": 31750.5556,
      "count": 18,
      "rank": 1
  },
  {
      "state": "Alabama",
      "industry_type": "Social Assistance",
      "industry": "INDIVIDUAL AND FAMILY SERVICES",
      "salary": 24892.0175,
      "count": 114,
      "rank": 2
  },
  {
      "state": "Alabama",
      "industry_type": "Social Assistance",
      "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
      "salary": 21430.7692,
      "count": 13,
      "rank": 3
  },
  {
      "state": "Alabama",
      "industry_type": "Social Assistance",
      "industry": "CHILD DAY CARE SERVICES",
      "salary": 12990.7216,
      "count": 194,
      "rank": 4
  },
  {
      "state": "Alabama",
      "industry_type": "Transportation",
      "industry": "",
      "salary": 44570.1857,
      "count": 754,
      "rank": 0
  },
  {
      "state": "Alabama",
      "industry_type": "Transportation",
      "industry": "RAIL TRANSPORTATION",
      "salary": 63397.6744,
      "count": 43,
      "rank": 1
  },
  {
      "state": "Alabama",
      "industry_type": "Transportation",
      "industry": "WATER TRANSPORTATION",
      "salary": 53000,
      "count": 11,
      "rank": 2
  },
  {
      "state": "Alabama",
      "industry_type": "Transportation",
      "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
      "salary": 50069.9187,
      "count": 123,
      "rank": 3
  },
  {
      "state": "Alabama",
      "industry_type": "Transportation",
      "industry": "AIR TRANSPORTATION",
      "salary": 48088.0952,
      "count": 42,
      "rank": 4
  },
  {
      "state": "Alabama",
      "industry_type": "Transportation",
      "industry": "POSTAL SERVICE",
      "salary": 47542.4528,
      "count": 106,
      "rank": 5
  },
  {
      "state": "Alabama",
      "industry_type": "Utilities",
      "industry": "",
      "salary": 62696.7655,
      "count": 371,
      "rank": 0
  },
  {
      "state": "Alabama",
      "industry_type": "Utilities",
      "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
      "salary": 73636.1702,
      "count": 235,
      "rank": 1
  },
  {
      "state": "Alabama",
      "industry_type": "Utilities",
      "industry": "ELECTRIC AND GAS, AND OTHER COMBINATIONS",
      "salary": 60900,
      "count": 17,
      "rank": 2
  },
  {
      "state": "Alabama",
      "industry_type": "Utilities",
      "industry": "NATURAL GAS DISTRIBUTION",
      "salary": 53132,
      "count": 25,
      "rank": 3
  },
  {
      "state": "Alabama",
      "industry_type": "Utilities",
      "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
      "salary": 37983.5821,
      "count": 67,
      "rank": 4
  },
  {
      "state": "Alabama",
      "industry_type": "Utilities",
      "industry": "SEWAGE TREATMENT FACILITIES",
      "salary": 37592,
      "count": 25,
      "rank": 5
  },
  {
      "state": "Alabama",
      "industry_type": "Wholesale Trade",
      "industry": "",
      "salary": 48605.1546,
      "count": 485,
      "rank": 0
  },
  {
      "state": "Alabama",
      "industry_type": "Wholesale Trade",
      "industry": "HARDWARE, AND PLUMBING AND HEATING EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
      "salary": 86204,
      "count": 25,
      "rank": 1
  },
  {
      "state": "Alabama",
      "industry_type": "Wholesale Trade",
      "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
      "salary": 73722.5806,
      "count": 31,
      "rank": 2
  },
  {
      "state": "Alabama",
      "industry_type": "Wholesale Trade",
      "industry": "METALS AND MINERALS, EXCEPT PETROLEUM, MERCHANT WHOLESALERS",
      "salary": 59800,
      "count": 13,
      "rank": 3
  },
  {
      "state": "Alabama",
      "industry_type": "Wholesale Trade",
      "industry": "PETROLEUM AND PETROLEUM PRODUCTS MERCHANT WHOLESALERS",
      "salary": 59413.3333,
      "count": 15,
      "rank": 4
  },
  {
      "state": "Alabama",
      "industry_type": "Wholesale Trade",
      "industry": "MISCELLANEOUS DURABLE GOODS MERCHANT WHOLESALERS",
      "salary": 51470.5882,
      "count": 17,
      "rank": 5
  },
  {
      "state": "Alaska",
      "industry_type": "Agriculture",
      "industry": "",
      "salary": 33114.0351,
      "count": 114,
      "rank": 0
  },
  {
      "state": "Alaska",
      "industry_type": "Agriculture",
      "industry": "FORESTRY EXCEPT LOGGING",
      "salary": 59872.7273,
      "count": 11,
      "rank": 1
  },
  {
      "state": "Alaska",
      "industry_type": "Agriculture",
      "industry": "FISHING, HUNTING AND TRAPPING",
      "salary": 31464.7059,
      "count": 85,
      "rank": 2
  },
  {
      "state": "Alaska",
      "industry_type": "Construction",
      "industry": "",
      "salary": 44394.8921,
      "count": 278,
      "rank": 0
  },
  {
      "state": "Alaska",
      "industry_type": "Construction",
      "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
      "salary": 44394.8921,
      "count": 278,
      "rank": 1
  },
  {
      "state": "Alaska",
      "industry_type": "Educational Services",
      "industry": "",
      "salary": 36631.1869,
      "count": 337,
      "rank": 0
  },
  {
      "state": "Alaska",
      "industry_type": "Educational Services",
      "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
      "salary": 37909.0909,
      "count": 33,
      "rank": 1
  },
  {
      "state": "Alaska",
      "industry_type": "Educational Services",
      "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
      "salary": 36783.5395,
      "count": 291,
      "rank": 2
  }, ],
    autoLoad: true,
            root: {
                text: 'States'
            }
        }
    }

});
