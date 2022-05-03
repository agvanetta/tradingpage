package com.example.RobinhoodBACK.Service;

import com.example.RobinhoodBACK.Entities.User;
import com.example.RobinhoodBACK.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User save(User user){
        return userRepository.save(user);
    }

    public List<User> findAll(){
        return userRepository.findAll();
    }

    public User findById(Integer id){
        return userRepository.findById(id).orElseGet(null);
        // In case of that "findById" == null, return a null.
    }

    public void delete(Integer  id){
        userRepository.deleteById(id);
    }
}
