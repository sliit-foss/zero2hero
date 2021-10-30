---
sidebar_position: 1
---

# Creating and Using Datasources

You can use Amazon ML datasources to train an ML model, evaluate an ML model, and generate batch predictions using an ML model. Datasource objects contain metadata about your input data. When you create a datasource, Amazon ML reads your input data, computes descriptive statistics on its attributes, and stores the statistics, a schema, and other information as part of the datasource object. After you create a datasource, you can use the Amazon ML data insights to explore statistical properties of your input data, and you can use the datasource to train an ML model.

## 1. Understanding the Data Format for Amazon ML

Input data is the data that you use to create a datasource. You must save your input data in the comma-separated values (.csv) format. Each row in the .csv file is a single data record or observation. Each column in the .csv file contains an attribute of the observation. For example, the following figure shows the contents of a .csv file that has four observations, each in its own row. Each observation contains eight attributes, separated by a comma. The attributes represent the following information about each individual represented by an observation: customerId,jobId,education,housing,loan,campaign,duration,willRespondToCampaign.


## Attributes

Amazon ML requires names for each attribute. You can specify attribute names by:

Including the attribute names in the first line (also known as a header line) of the .csv file that you use as your input data

Including the attribute names in a separate schema file that is located in the same S3 bucket as your input data

For more information about using schema files, see Creating a Data Schema.

The following example of a .csv file includes the names of the attributes in the header line.

```json
customerId,jobId,education,housing,loan,campaign,duration,willRespondToCampaign

1,3,basic.4y,no,no,1,261,0

2,1,high.school,no,no,22,149,0

3,1,high.school,yes,no,65,226,1

4,2,basic.6y,no,no,1,151,0

```

##Input File Format Requirements
The .csv file that contains your input data must meet the following requirements:

Must be in plain text using a character set such as ASCII, Unicode, or EBCDIC.

Consist of observations, one observation per line.

For each observation, the attribute values must be separated by commas.

If an attribute value contains a comma (the delimiter), the entire attribute value must be enclosed in double quotes.

Each observation must be terminated with an end-of-line character, which is a special character or sequence of characters indicating the end of a line.

Attribute values cannot include end-of-line characters, even if the attribute value is enclosed in double quotes.

Every observation must have the same number of attributes and sequence of attributes.

Each observation must be no larger than 100 KB. Amazon ML rejects any observation larger than 100 KB during processing. If Amazon ML rejects more than 10,000 observations, it rejects the entire .csv file.

##Using Multiple Files As Data Input to Amazon ML

You can provide your input to Amazon ML as a single file, or as a collection of files. Collections must satisfy these conditions:

All files must have the same data schema.

All files must reside in the same Amazon Simple Storage Service (Amazon S3) prefix, and the path that you provide for the collection must end with a forward slash ('/') character.

For example, if your data files are named input1.csv, input2.csv, and input3.csv, and your S3 bucket name is s3://examplebucket, your file paths might look like this:

s3://examplebucket/path/to/data/input1.csv

s3://examplebucket/path/to/data/input2.csv

s3://examplebucket/path/to/data/input3.csv

You would provide the following S3 location as input to Amazon ML:

's3://examplebucket/path/to/data/'

##End-of-Line Characters in CSV Format

When you create your .csv file, each observation will be terminated by a special end-of-line character. This character is not visible, but is automatically included at the end of each observation when you press your Enter or Return key. The special character that represents the end-of-line varies depending on your operating system. Unix systems, such as Linux or OS X, use a line feed character that is indicated by "\n" (ASCII code 10 in decimal or 0x0a in hexadecimal). Microsoft Windows uses two characters called carriage return and line feed that are indicated by "\r\n" (ASCII codes 13 and 10 in decimal or 0x0d and 0x0a in hexadecimal).

If you want to use OS X and Microsoft Excel to create your .csv file, perform the following procedure. Be sure to choose the correct format.

To save a .csv file if you use OS X and Excel

When saving the .csv file, choose Format, and then choose Windows Comma Separated (.csv).

Choose Save.

####Important
Do not save the .csv file by using the Comma Separated Values (.csv) or MS-DOS Comma Separated (.csv) formats because Amazon ML is unable to read them.