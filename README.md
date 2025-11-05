# Hybrid Streaming-Batch Data Pipeline using AWS Kinesis and Glue

A scalable hybrid data pipeline solution that combines real-time streaming and batch processing capabilities using AWS Kinesis and AWS Glue. This system efficiently handles both:
- **Real-time Processing**: Small user-requested jobs (4-5 records) with 5-10 second completion time
- **Batch Processing**: Large-scale operations (millions of records) processed during off-peak hours

## Overview

This project implements a flexible data processing architecture that uses:
- **AWS Kinesis**: Acts as a managed queue system for incoming data processing commands
- **AWS Glue**: Runs a continuous Spark streaming job that processes both real-time and batch workloads
- **AWS S3**: Serves as the source and destination for data operations

## Features

- **Hybrid Processing**: Seamlessly handles both streaming and batch workloads
- **Zero Start-up Overhead**: Continuous running job eliminates cold start delays
- **Scalable Architecture**: Automatically scales with AWS Kinesis and Glue
- **File Format Support**: Handles various file formats through dynamic file type detection
- **Simple Command Interface**: Uses AWS CLI for job submission
- **Infrastructure as Code**: Complete AWS CloudFormation template for infrastructure setup

## Output
![alt text](info/output.gif)

## Architecture:
![alt text](info/image.png)
Users providing input command to kinesis data streams using aws-cli. A constant runnning glue job will pick up the command perform ETL and load data in S3.

## Prerequisites
- AWS CLI

## Usage

To update the glue job:
Perform updates in `glue-streaming.py` and then upload it to s3 bucket

To create the stack:
```
aws cloudformation create-stack --stack-name <stack-name> --capabilities CAPABILITY_IAM --template-body file://template.yml
```

To delete the stack:
```
aws cloudformation delete-stack --stack-name <stack-name>
```

Command to pass from Kafka Streams:
```
aws kinesis put-record --profile rearc-data-dev --stream-name <stream-name> --partition-key <partition-key> --data '{"source":"<s3-input-path>","dest":"<s3-destination-path>","command":"copy"}' --cli-binary-format raw-in-base64-out
```

