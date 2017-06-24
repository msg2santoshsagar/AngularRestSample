package com.sample.web.rest;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sample.domain.Document;

@RestController
@RequestMapping("/api")
public class DocumentController {
	
	private List<Document> documentList = new ArrayList<Document>();
	private long documentIdCount = 0;
	
	@PostMapping("/uploadFile")
	public Boolean uploadFile(@RequestBody ArrayList<Document> dList){
		for(Document d:dList){
			documentIdCount ++;
			d.setId(documentIdCount);
		}
		documentList.addAll(dList);
		return true;	
	}
	
	
	@PostMapping("/getFileList")
	public List<Document> getFileList(){
		return documentList;	
	}
	
	@GetMapping(value="/getFileData",produces=MediaType.ALL_VALUE)
	public void getFileData(@RequestParam String fileName,HttpServletResponse response){
		System.out.println("*************************----------------Inside Get File Data ***************** :: File Name ::  "+fileName);
		String content = "undefined";
		for(Document d:documentList){
			if(String.valueOf(d.getId()).equals(fileName)){
				content =d.getType().startsWith("image") ? d.getThumbnailSrc() : d.getSrc();
				break;
			}
		}
		String imageDataStringBase64 = content.split(",")[1]; 
		
		byte data[] = Base64.getDecoder().decode(imageDataStringBase64.getBytes());
		try {
			response.getOutputStream().write(data);
		} catch (IOException e) {
			e.printStackTrace();
		}
		System.out.println("*************************----------------Inside Get File Data -- End");
		
		//return content;	
	}

}
