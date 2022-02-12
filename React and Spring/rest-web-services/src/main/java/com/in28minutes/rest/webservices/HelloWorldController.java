package com.in28minutes.rest.webservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//Controller 
@RestController
public class HelloWorldController {
	
	@GetMapping( path = "/hello-world")
	public String helloWorld() {
		return "Hello World";
	}
	
	//
	@GetMapping( path = "/hello-world")
	public String helloWorld() {
		return "Hello World";
	}

}
