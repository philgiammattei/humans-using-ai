#!/usr/bin/env groovy

import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths
import java.time.LocalDate
import java.time.format.DateTimeFormatter

if (args.length != 1) {
    println "Usage: createBlogPost.groovy <filename>"
    System.exit(1)
}

String arg = args[0]
String fileName = "../md/blog/${arg}.md"
println fileName

// Check if the directory exists, if not create it
File dir = new File("../md/blog/")
if (!dir.exists()) {
    if (!dir.mkdirs()) {
        println "Error: Unable to create directory '${dir}'."
        System.exit(1)
    }
}

File file = new File(fileName)

if (!file.createNewFile()) {
    println "Error: File '${fileName}' already exists."
    System.exit(1)
}

File downloadsDir = new File("/Users/phil/Downloads")
List<String> supportedImageTypes = ["jpg", "jpeg", "png", "gif"]

File imageFile = null

downloadsDir.eachFile { imgFile ->
    String fileExtension = imgFile.name.tokenize('.').last()
    if (supportedImageTypes.contains(fileExtension) && file.name.startsWith(arg)) {
        imageFile = imgFile
    }
}

String bannerPhoto = ""
String thumbnailPhoto = ""

if (imageFile != null) {
    Path source = Paths.get(imageFile.absolutePath)
    Path destination = Paths.get("../public/img/${imageFile.name}")
    Files.move(source, destination)
    println "Image file '${imageFile.name}' moved to '${destination}'."
    bannerPhoto = "/img/${imageFile.name}"
    thumbnailPhoto = "/img/${imageFile.name}"
} else {
    println "No matching image file found."
}

LocalDate today = LocalDate.now()
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy")
String datePublished = today.format(formatter)

String frontMatter = """---
title:
subtitle:
published: true
datePublished: ${datePublished}
author: Phil Giammattei
authorPhoto: /img/profile.jpg
bannerPhoto: ${bannerPhoto}
thumbnailPhoto: ${thumbnailPhoto}
canonicalUrl: https://humans-using.ai/blog/${arg}
---"""

file.write(frontMatter)

println "File '${fileName}' created successfully."
