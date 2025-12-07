package com.jesusgarcia.back_end.repository;

import com.jesusgarcia.back_end.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

}
