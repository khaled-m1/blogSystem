package com.example.blogs.controller;

import com.example.blogs.model.Api;
import com.example.blogs.model.Blog;
import com.example.blogs.repostory.BlogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/blog")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class BlogController {

    private final BlogRepository blogRepository;

    @GetMapping
    public ResponseEntity getBlogs(){
        return ResponseEntity.status(200).body(blogRepository.findAll());
    }
    @GetMapping("/{id}")
    public ResponseEntity getBlogById(@PathVariable Long id){
        return ResponseEntity.status(200).body(blogRepository.findById(id).get());
    }
    @PostMapping
    public ResponseEntity addBlogs(@RequestBody Blog blog){
        blogRepository.save(blog);
        return ResponseEntity.status(201).body(new Api("accepted request :)",201));
    }
}
