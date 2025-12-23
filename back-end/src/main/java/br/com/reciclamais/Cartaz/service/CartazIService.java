package br.com.reciclamais.Cartaz.service;

import br.com.reciclamais.Cartaz.entity.Cartaz;

import java.util.List;

public interface CartazIService {

    void save(Cartaz cartaz) throws RuntimeException;

    List<Cartaz> findAll() throws RuntimeException;
}
