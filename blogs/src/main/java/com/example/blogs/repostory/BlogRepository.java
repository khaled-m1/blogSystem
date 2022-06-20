package com.example.blogs.repostory;

import com.example.blogs.model.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository<Blog,Long> {
}
