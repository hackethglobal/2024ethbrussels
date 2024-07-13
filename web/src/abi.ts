export const abi = 
  [
    {
      "inputs": [],
      "name": "activeTripDriver",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "int128",
              "name": "lat",
              "type": "int128"
            },
            {
              "internalType": "int128",
              "name": "lon",
              "type": "int128"
            }
          ],
          "internalType": "struct IGeocab.Location",
          "name": "origin",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "int128",
              "name": "lat",
              "type": "int128"
            },
            {
              "internalType": "int128",
              "name": "lon",
              "type": "int128"
            }
          ],
          "internalType": "struct IGeocab.Location",
          "name": "destination",
          "type": "tuple"
        }
      ],
      "name": "bookTrip",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "name": "completeTrip",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "int128",
              "name": "lat",
              "type": "int128"
            },
            {
              "internalType": "int128",
              "name": "lon",
              "type": "int128"
            }
          ],
          "internalType": "struct IGeocab.Location",
          "name": "location",
          "type": "tuple"
        }
      ],
      "name": "computeGeohash",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "geohash",
          "type": "string"
        }
      ],
      "name": "driversAtGeohash",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "int128",
              "name": "lat",
              "type": "int128"
            },
            {
              "internalType": "int128",
              "name": "lon",
              "type": "int128"
            }
          ],
          "internalType": "struct IGeocab.Location",
          "name": "origin",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "int128",
              "name": "lat",
              "type": "int128"
            },
            {
              "internalType": "int128",
              "name": "lon",
              "type": "int128"
            }
          ],
          "internalType": "struct IGeocab.Location",
          "name": "destination",
          "type": "tuple"
        }
      ],
      "name": "estimateTrip",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "number",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "driver",
              "type": "address"
            },
            {
              "internalType": "int128",
              "name": "lat",
              "type": "int128"
            },
            {
              "internalType": "int128",
              "name": "lon",
              "type": "int128"
            }
          ],
          "internalType": "struct IGeocab.DriverLocation[]",
          "name": "drivers",
          "type": "tuple[]"
        }
      ],
      "name": "publishDriverLocations",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "new_per_trip_fee",
          "type": "uint256"
        }
      ],
      "name": "setFee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int128",
          "name": "new_price_factor",
          "type": "int128"
        }
      ],
      "name": "setPriceFactor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ] as const