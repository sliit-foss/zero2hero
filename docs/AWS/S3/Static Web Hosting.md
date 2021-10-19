---
sidebar_position: 1
---

# Hosting Static Websites on S3  {#intro}

**S3** is an object storage service on **AWS**. It has a lot of advance features such as **Encryption**, **Versioing** and **Web Hosting**. In this document, We will have a look into hosting static websites on S3.

## 1. Create New S3 Bucket {#create-new-bucket}

First of you should log into the **AWS Account** and create new **S3 Bucket**. Just name your bucket and create it. You don't need to change any other settings for now.

![Create new bucket](../../assets/img/AWS/S3/Static-Hosting/create-bucket.png)

## 2. Upload Website Files  {#upload-files}

Once you created your bucket, You need to upload all of your website files into the buckect.

> **Note:** The entrypoint (`index.html`) should be in the root of the bucket.

![upload files](../../assets/img/AWS/S3/Static-Hosting/upload-files.png)

## 3. Enable Static-Web-Hosting  {#enable-static-web-hosting}

After uploading the files, You need to enable an option called **Static Web Hosting** that is located in **properties** tab.

![enable static hosting](../../assets/img/AWS/S3/Static-Hosting/enable-static-hosting.png)

Click on **Edit** button to **enable** it.

![enable static hosting window](../../assets/img/AWS/S3/Static-Hosting/static-hosting-setting.png)

Make sure that you configured the options as follows,

 - **Static Web Hosting** - Enabled
 - **Hosting Type** - Host a static website
 - **Index Document** - index.html *(if you use different entry file, enter it)*

Once you set all above, **Save** it.

## 4. Change Bucket Permissions  {#change-bucket-permissions}

By default, **S3 Buckets** are **not public**. To make the website visible to users, You need to change the **permissions**. Follow below steps to do it.

1. Navigate to **Permissions** tab.
2. Scroll down to **Block public access** section.
3. Click on **Edit** and **Uncheck** all.
4. Then, **Save** the changes.

![enable public access](../../assets/img/AWS/S3/Static-Hosting/change-public-access.png)

Once you done this, You need to define **Bucket Policy** to specify what kind of actions can be authorised to public.

![bucket policy](../../assets/img/AWS/S3/Static-Hosting/bucket-policy.png)

Click on **Edit** and add following policy. Then, **Save** the changes. Replace `<<your-bucket-name>>` with your bucket name.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::<<your-bucket-name>>/*"
        }
    ]
}
```

Once you done, It will look like this.

![bucket policy updated](../../assets/img/AWS/S3/Static-Hosting/bucket-policy-updated.png)

## 5. Visit Your Website   {#visit-website}

That's it, Now your website is public and anyone can access it. To get the **public url**, You should navigate to the **static web hosting** section. There you can see **Bucket website endpoint**.

![get public url](../../assets/img/AWS/S3/Static-Hosting/get-public-url.png)

Jusy **copy** and **paste** it on your browser. Now, You can see your website.

> *In this case, I deployed default angular app.*

![web page](../../assets/img/AWS/S3/Static-Hosting/web-page.png)
