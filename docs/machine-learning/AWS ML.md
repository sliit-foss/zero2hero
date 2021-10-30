---
sidebar_position: 2
---



# Amazon Machine Learning Documentation
Amazon Machine Learning makes it easy for developers to build smart applications, including applications for fraud detection, demand forecasting, targeted marketing, and click prediction. The powerful algorithms of Amazon Machine Learning create machine learning (ML) models by finding patterns in your existing data. The service uses these models to process new data and generate predictions for your application.

## 1. Amazon Machine Learning Key Concepts

This section summarizes the following key concepts and describes in greater detail how they are used within Amazon ML:

Datasources contain metadata associated with data inputs to Amazon ML

ML Models generate predictions using the patterns extracted from the input data

Evaluations measure the quality of ML models

Batch Predictions asynchronously generate predictions for multiple input data observations

Real-time Predictions synchronously generate predictions for individual data observations

##Datasources
A datasource is an object that contains metadata about your input data. Amazon ML reads your input data, computes descriptive statistics on its attributes, and stores the statistics—along with a schema and other information—as part of the datasource object. Next, Amazon ML uses the datasource to train and evaluate an ML model and generate batch predictions.

##ML Models
An ML model is a mathematical model that generates predictions by finding patterns in your data. Amazon ML supports three types of ML models: binary classification, multiclass classification and regression.

The following table defines terms that are related to ML models.

